import React from "react";
import Helmet from "react-helmet";
import { Header, Footer, ScrollToTop } from "../";

interface Props {
	children?: React.ReactNode;
}

const Layout: React.FC = ({ children }: Props) => {
	return (
		<div className="page">
			<Helmet
				bodyAttributes={{
					class: "theme-light",
				}}
			/>
			<Header />
			<div className="content">
				<main className="container">
					{children}
				</main>
			</div>
			
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Layout;
