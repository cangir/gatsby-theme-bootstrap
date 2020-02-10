import React from "react";
import Helmet from "react-helmet";
import {Col, Row} from 'react-bootstrap'
import { Header, Footer, ScrollToTop } from "../";

interface Props {
	children?: React.ReactNode;
	title?: string;
	breadcrumb?: boolean;
}

const Layout = ({ children, title, breadcrumb }: Props) => {
	return (
		<div className="page">
			<Helmet
				bodyAttributes={{
					class: "theme-light",
				}}
			/>
			<Header title={title} breadcrumb={breadcrumb} />
			<div className="content">
				<main className="container">
					<Col md={10} lg={8} className="m-auto">
						<Row>
						{children}
						</Row>
					</Col>
					
				</main>
			</div>
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Layout;
