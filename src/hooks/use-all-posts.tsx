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
				slug: string;
				tags: string[];
			};
		}[];
	};
};

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
				}
			}
		}
	`);
	return data.allMdx.nodes;
};

export default useAllPosts;
