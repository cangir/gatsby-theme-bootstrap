import { graphql, useStaticQuery } from "gatsby";

type Props = {
	allCookiesYaml: {
		edges: {
			node: {
				id: string;
				title: string;
				description: string;
			};
		}[];
	};
};

export const useCookieSettings = () => {
	const data = useStaticQuery<Props>(graphql`
		query {
			allCookiesYaml {
				edges {
					node {
						id
						title
						description
					}
				}
			}
		}
	`);
	return data.allCookiesYaml.edges;
};

export default useCookieSettings;
