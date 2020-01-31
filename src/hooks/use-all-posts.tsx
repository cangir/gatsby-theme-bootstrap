import { graphql, useStaticQuery } from "gatsby";

type Props = {
  allMdx: {
    nodes: {
      id: string;
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
      fields: {
        slug: string;
      };
    }[];
  };
};

{
  /* TODO: fix warning Missing return type on function */
}

export const useAllPosts = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  return data.allMdx.nodes;
};

export default useAllPosts;
