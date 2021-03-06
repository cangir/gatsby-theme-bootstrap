import React from "react";
import Helmet from "react-helmet";
import { Col, Row } from "react-bootstrap";
import { CallToAction, Clients, Header, Footer, ScrollToTop, Navbar } from "../";
// import { useCookie } from "../../hooks";
// import { MDXRenderer } from "gatsby-plugin-mdx";

interface Props {
	children?: React.ReactNode;
	title?: string;
	breadcrumb?: boolean;
}

const Layout = ({ children, title, breadcrumb }: Props) => {
	// const [marketing, setMarketing] = useCookie('cookie_marketing', false);
	// console.log(marketing);
	// const [lgShow, setLgShow] = useState(false);

	return (
		<div className="page">
			<Helmet
				bodyAttributes={{
					class: "theme-light",
				}}
				htmlAttributes={{
					lang: "de",
				}}
			>
				<meta charSet="utf-8" />
				<title>My Title</title>
				<meta name="description" content="Nested component" />
			</Helmet>
			<Navbar />
			<Header title={title} breadcrumb={breadcrumb} />
			<div className="content">
				<main className="container">
					<Col md={10} lg={8} className="m-auto py-4">
						<Row>{children}</Row>
					</Col>
				</main>
			</div>
			<CallToAction />
			<Clients />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Layout;
