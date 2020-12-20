import matter from 'gray-matter';
import { parseISO, format } from 'date-fns';
import fs from 'fs';
import { join } from 'path';

// `src/content/markdown`を処理
const postDirectory = join(process.cwd(), 'src', 'content', 'post');

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const date = format(parseISO(data.date), 'yyyy/MM/dd');
  const title = data.title;

  return { slug: realSlug, date, title, content };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postDirectory);
  const post = slugs.map((slug) => getPostBySlug(slug));

  return post;
}
