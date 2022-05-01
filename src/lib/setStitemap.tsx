import fs from 'fs';
import { format } from 'date-fns';
import siteMeta from 'components/config';

export function setSiteMap(fetchDate: Date) {
  let sitemapString: string;

  sitemapString = '<?xml version="1.0" encoding="UTF-8" ?>';
  sitemapString +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  sitemapString += '<url><loc>';
  sitemapString += siteMeta.url;
  sitemapString += '</loc>';
  sitemapString += '<lastmod>';
  sitemapString += format(fetchDate, 'yyyy-MM-dd');
  sitemapString += 'T';
  sitemapString += format(fetchDate, 'hh:mmxxx');
  sitemapString += '</lastmod>';
  sitemapString += '<changefreq>monthly</changefreq>';
  sitemapString += '<priority>1.0</priority>';
  sitemapString += '</url></urlset>';

  fs.writeFile(
    'public/sitemap.xml',
    sitemapString,
    'utf8',
    () => {
      // eslint-disable-next-line no-console
      console.log('Sitemap.xml saved');
    }
  );
}

export default setSiteMap;
