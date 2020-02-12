import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout/layout";
import { Post } from "../models";
import { useCookieSettings } from "../hooks"
import {Card, Row, Col, Form} from "react-bootstrap"
 
type Props = {
	data: {
		mdx: Post;
	};
};

const PageCookieSettingsTemplate = ({ data }: Props) => {
	const post = data.mdx;
	const cookies = useCookieSettings();
	console.log(cookies);
	return (
		<Layout title={post.frontmatter.title}>
			<MDXRenderer>{post.body}</MDXRenderer>
			{cookies.map(({ node }, i) => {
				const { id, title, description } = node;
				return (
					<article key={i} className="pb-4">	
						<label className="form-check form-switch">
							<input className="form-check-input" type="checkbox" disabled={id === "main"}/>
							<span className="form-check-label h3">{title}</span>
						</label>
						<p>{description}</p>
					</article>
				);
			})}
			
		</Layout>
	);
};

export const query = graphql`
	query PageCookieSettingsBySlug($slug: String!) {
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

export default PageCookieSettingsTemplate;
