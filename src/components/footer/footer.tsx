import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// import { Divider } from "..";

export const Footer: React.FC = () => {
	return (
		<footer className="footer pt-6 pb-4 position-relative">
			{/* <Divider position="top" variant="inverse" /> */}
			<Container>
				<Row className="text-center align-items-center">
					<Col>
						<Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
							<Nav.Item as="li">
								<Nav.Link href="/home">Active</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link eventKey="link-1">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Nav.Link eventKey="link-2">Link</Nav.Link>
							</Nav.Item>
						</Nav>
						<p className="h5 mt-3">© Copyright 2020</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
