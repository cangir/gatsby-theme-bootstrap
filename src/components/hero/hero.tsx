import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
// import { Parallax } from "react-parallax";

export const Hero: React.FC = () => {
	return (
		<section
			className="promo promo-block overlay overlay--dark gradient-primary"
			style={{ background: "url(http://localhost:8000/img/img5.jpg)" }}
		>
			<Container className="d-flex promo-container justify-content-start position-relative">
				<div className="align-self-end p-5">
					<h1>Can I upgrade my plan at any time?</h1>
					<Breadcrumb className="breadcrumb-arrows breadcrumb-alternate">
						<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</Breadcrumb.Item>
						<Breadcrumb.Item active>Data</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</Container>
		</section>
	);
};
