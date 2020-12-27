const matter = require('gray-matter');
import fs from 'fs';
import { join } from 'path';

// profile用のコンテンツ格納先
const profileDirectory = join(process.cwd(), 'src', 'content', 'profile');

export function getProfileComponentBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(profileDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title || '';

  return { slug: realSlug, title, content };
}

export function getAllProfileComponents() {
  const slugs = fs.readdirSync(profileDirectory);
  const components = slugs.map((slug) => getProfileComponentBySlug(slug));

  return components;
}
