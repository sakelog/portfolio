import fs from 'fs';
import { join } from 'path';

// baseDirectory
const baseDirectory = join(process.cwd(), 'src', 'content');

export function getComponentJsonBySlug(slug, directory) {
  const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(baseDirectory, directory, `${realSlug}.json`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const content = JSON.parse(fileContent);

  return { slug: realSlug, content };
}

export function getAllComponentsJson(directory) {
  const allslugs = fs.readdirSync(join(baseDirectory, directory));
  const slugs = allslugs.filter((slug) => slug.match(/.*\.json$/));
  const components = slugs.map((slug) =>
    getComponentJsonBySlug(slug, directory)
  );

  return components;
}
