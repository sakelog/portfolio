import remark from 'remark';
import html from 'remark-html';
import { getPostBySlug, getAllPosts } from '../lib/post';

// Component
import Layout from '../component/layout';

export const config = { amp: true };

function Post({ date, title, content }) {
  return (
    <Layout>
      <div>
        {date}
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const date = post.date;
  const title = post.title;
  const markdown = await remark()
    .use(html)
    .process(post.content || '');
  const content = markdown.toString();

  return {
    props: {
      ...post,
      date,
      title,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
