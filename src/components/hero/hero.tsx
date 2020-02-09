import React from "react";
import { Container } from "react-bootstrap";
// import { Parallax } from "react-parallax";
import { Breadcrumb, Divider } from "..";

export const Hero: React.FC = () => {
	return (
		<section
			className="promo"
			style={{ background: "center url(./img/bg.jpg)" }}
		>
			<Container className="d-flex promo-container justify-content-start position-relative">
				<div className="align-self-end p-5">
					<h1>Can I upgrade my plan at any time?</h1>
					<Breadcrumb />
				</div>
			</Container>
			<Divider />
		</section>
	);
};
