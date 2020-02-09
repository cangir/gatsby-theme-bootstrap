import React from "react";

type HTMLProps = {
	htmlAttributes: {};
	headComponents: [];
	bodyAttributes: {};
	preBodyComponents: [];
	body: string;
	postBodyComponents: [];
};

function HTML(props: HTMLProps) {
	const { htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents } = props;
	return (
		<html {...htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta content="True" name="HandheldFriendly" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
				{headComponents}
			</head>
			<body {...bodyAttributes}>
				{preBodyComponents}
				<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
				{postBodyComponents}
			</body>
		</html>
	);
}
export default HTML;
