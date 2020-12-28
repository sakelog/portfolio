import fs from 'fs';
import { join } from 'path';

// profile用のコンテンツ格納先
const profileDirectory = join(process.cwd(), 'src', 'content', 'profile');

export function getProfileComponentJsonBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(profileDirectory, `${realSlug}.json`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const content = JSON.parse(fileContent);

  return { slug: realSlug, content };
}

export function getAllProfileComponentsJson() {
  const allslugs = fs.readdirSync(profileDirectory);
  const slugs = allslugs.filter((slug) => slug.match(/.*\.json$/));
  const components = slugs.map((slug) => getProfileComponentJsonBySlug(slug));

  return components;
}
