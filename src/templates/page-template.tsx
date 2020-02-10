import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from "../components/layout/layout";
import { Post } from "../models";

type Props = {
	data: {
		mdx: Post;
	};
};

const PageTemplate = ({ data }: Props) => {
	const post = data.mdx;
	return (
		<Layout title={post.frontmatter.title}>
			<MDXRenderer>{post.body}</MDXRenderer>
		</Layout>
	);
};

export const query = graphql`
	query PageBySlug($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			id
			body
			frontmatter {
				tags
				slug
				category
				date
				draft
				description
				modified
				template
				title
			}
		}
	}
`;

export default PageTemplate;
