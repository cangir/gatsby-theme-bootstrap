import React from "react";
import { Container } from "react-bootstrap";
// import { Parallax } from "react-parallax";
import { Breadcrumb, Divider } from "..";

interface Props {
	title?: string;
	breadcrumb?: boolean;
}

export const Hero = ({title, breadcrumb}: Props) => {
	return (
			<section className="position-relative">
				<Container className="d-flex promo-container justify-content-start">
				<div className="align-self-end p-5">
					<h1>{title}</h1>
					{breadcrumb && <Breadcrumb />}
				</div>
				</Container>
				<Divider />
			</section>
	);
};
