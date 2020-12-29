const matter = require('gray-matter');
import fs from 'fs';
import { join } from 'path';

// profile用のコンテンツ格納先
const profileDirectory = join(process.cwd(), 'src', 'content', 'profile');

export function getProfileComponentMDBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(profileDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, data, content };
}

export function getAllProfileComponentsMD() {
  const allslugs = fs.readdirSync(profileDirectory);
  const slugs = allslugs.filter((slug) => slug.match(/.*\.md$/));
  const components = slugs.map((slug) => getProfileComponentMDBySlug(slug));

  return components;
}
