import React from "react";
import { Breadcrumb as BSBreadcrumb } from "react-bootstrap";
// import { Parallax } from "react-parallax";

export const Breadcrumb: React.FC = () => {
	return (
		<BSBreadcrumb className="breadcrumb-arrows breadcrumb-alternate">
			<BSBreadcrumb.Item href="/">Home</BSBreadcrumb.Item>
			<BSBreadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</BSBreadcrumb.Item>
			<BSBreadcrumb.Item active>Data</BSBreadcrumb.Item>
		</BSBreadcrumb>
	);
};
