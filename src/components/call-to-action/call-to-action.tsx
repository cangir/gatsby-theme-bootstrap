import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const CallToAction = () => {
	return (
		<section className="call-to-action bg-dark-lt py-6">
			<Container className="d-flex justify-content-center">
				<Row className="justify-content-center text-center">
					<Col md={10} lg={8}>
						<h4 className="h1">Open Source and free to use in your apps</h4>
						<p>
							Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
							blind texts.
						</p>
						<Button variant="dark">Call to Action</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
