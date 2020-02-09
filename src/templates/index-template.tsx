import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout/layout";
import { useAllPosts } from "../hooks";

const IndexTemplate: React.FCX<{}> = () => {
	return (
		<Layout>
			<Helmet
				bodyAttributes={
					{
						// class: "theme-light",
					}
				}
			/>
			{useAllPosts().map(({ excerpt, frontmatter }, i) => {
				const { title, date, tags, slug } = frontmatter;
				return (
					<article key={i}>
						<Link to={`/${slug}`}>
							<h2>{title}</h2>
						</Link>
						<p>{date}</p>
						<p>{excerpt}</p>
						<ul>{tags && tags.map((tag, j) => <li key={j}>{tag}</li>)}</ul>
					</article>
				);
			})}
		</Layout>
	);
};

export default IndexTemplate;
