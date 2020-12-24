import { getToolBySlug, getAllTools } from '../../lib/tools';
import dynamic from 'next/dynamic';

const fullPath;

export const Tool = ({ params }) => {
  import(params.fullPath);
};

//export default Tool;

/*
export const getStaticProps = ({ params }) => {
  const tool = getToolBySlug(params.slug);
  const fullPath = tool.fullPath;

  return {
    props: {
      ...tool,
      fullPath,
    },
  };
};
*/

/*
export async function getStaticPaths() {
  const tools = getAllTools();

  return {
    paths: tools.map((tool) => {
      return {
        params: {
          slug: tool.slug,
          fullPath: tool.fullPath,
        },
      };
    }),
    fallback: false,
  };
}
*/

/*
import { getToolBySlug, getAllTools } from '../../lib/tools';

export async function getStaticProps({ params }) {
  const tool = getToolBySlug(params.slug);

  return {
    props: {
      ...tool,
    },
  };
}

export async function getStaticPaths() {
  const tools = getAllTools();

  return {
    paths: tools.map((tool) => {
      return {
        params: {
          slug: tool.slug,
        },
      };
    }),
    fallback: false,
  };
}
*/
