import { unified } from 'unified';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify/lib';

export const markdownToHtml = (markdown: string) => {
  const convertedHTML = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();

  return convertedHTML;
};
