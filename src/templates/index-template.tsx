import React from "react";
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
		</Layout>
	);
};

export default IndexTemplate;
