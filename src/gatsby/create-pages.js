"use strict";

const path = require("path");
const _ = require("lodash");
const createCategoriesPages = require("./pagination/create-categories-pages.js");
const createTagsPages = require("./pagination/create-tags-pages.js");
const createPostsPages = require("./pagination/create-posts-pages.js");

const createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// 404
	createPage({
		path: "/404",
		component: path.resolve("./src/templates/not-found-template.tsx"),
	});

	// Tags list
	createPage({
		path: "/tags",
		component: path.resolve("./src/templates/tags-list-template.tsx"),
	});

	// Categories list
	createPage({
		path: "/categories",
		component: path.resolve("./src/templates/categories-list-template.tsx"),
	});

	// Posts and pages from markdown
	const result = await graphql(`
		{
			allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
				edges {
					node {
						frontmatter {
							template
							slug
						}
					}
				}
			}
		}
	`);

	const { edges } = result.data.allMdx;

	_.each(edges, edge => {
		if (_.get(edge, "node.frontmatter.template") === "page") {
			createPage({
				path: `/${edge.node.frontmatter.slug}`,
				component: path.resolve("./src/templates/page-template.tsx"),
				context: { slug: edge.node.frontmatter.slug },
			});
		} else {
			createPage({
				path: `/${edge.node.frontmatter.slug}`,
				component: path.resolve("./src/templates/" + edge.node.frontmatter.template + "-template.tsx"),
				context: { slug: edge.node.frontmatter.slug },
			});
		}
	});

	// Feeds
	await createTagsPages(graphql, actions);
	await createCategoriesPages(graphql, actions);
	await createPostsPages(graphql, actions);
};

module.exports = createPages;
