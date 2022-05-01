import { join } from 'path';
import fs from 'fs';
import { chromium } from 'playwright';

// config
import siteMeta from 'components/config';

export const createOgpImage = async (title: string) => {
  if (process.env.NODE_ENV === 'production') {
    const ogpPagePath = `${
      siteMeta.url
    }/ogp?title=${decodeURIComponent(title)}`;

    const localOgpImageDir = join(
      process.cwd(),
      'public',
      'img',
      'ogp'
    );
    const ogpImageFileName = `${decodeURIComponent(
      title
    )}.png`;

    const localPath = join(
      localOgpImageDir,
      ogpImageFileName
    );
    const publicPath = `${siteMeta.url}/img/ogp/${ogpImageFileName}`;

    try {
      fs.statSync(localPath);
      return publicPath;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(`ogp image create for : ${title}`);
    }

    const browser = await chromium.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewportSize({
      width: 1200,
      height: 630,
    });
    await page.goto(ogpPagePath, {
      waitUntil: 'networkidle',
    });
    const buffer = await page.screenshot({ type: 'png' });
    await browser.close();

    fs.mkdirSync(localOgpImageDir, { recursive: true });
    fs.writeFileSync(localPath, buffer);

    return publicPath;
  }

  return '';
};

export default createOgpImage;
