import Layout from '../component/layout';
import PostList from '../component/post-list';
import SEO from '../component/seo';

import siteMeta from '../config';

import { getAllPosts } from '../lib/post';

function TopPage({ posts }) {
  return (
    <>
      <SEO title={siteMeta.title} description={null} />
      <Layout>
        <div>
          <PostList posts={posts} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default TopPage;
