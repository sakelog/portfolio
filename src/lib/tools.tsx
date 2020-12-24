import fs from 'fs';
import { join } from 'path';

// `src/content/tools`を処理
const toolsDirectory = join(process.cwd(), 'src', 'content', 'tools');

export function getToolBySlug(slug) {
  const fullPath = join(toolsDirectory, slug, '/src/pages/index');

  return { slug, fullPath };
}

export function getAllTools() {
  const slugs = fs.readdirSync(toolsDirectory);
  const tool = slugs.map((slug) => getToolBySlug(slug));

  return tool;
}
