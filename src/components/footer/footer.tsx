import React from "react";
import {Link} from 'gatsby';
import { Container, Row, Col, Nav } from "react-bootstrap";
// import { Divider } from "..";

export const Footer: React.FC = () => {
	return (
		<footer className="footer mt-0 pt-6 pb-4 position-relative bg-github theme-dark">
			{/* <Divider position="top" variant="inverse" /> */}

			<Container>
				<Row className="align-items-top pb-4" noGutters={false}>
					<Col sm={12} md={12} lg={4} className="mb-2">
						<h3>
							<strong>About Us</strong>
						</h3>
						<p className="pr-4">
							Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
							blind texts.
						</p>
					</Col>

					<Col sm={12} md={6} lg={4} className="mb-4">
						<h3>
							<strong>Kontakt</strong>
						</h3>
						<address>
							CeFi - Bildung und Verständigung gUG (Träger)
							<br />
							Street Address 52
							<br />
							Contact Name
							<br />
							+49 123 456 7890
							<br />
							<a href="https://www.example.com">info@example.com</a>
						</address>
					</Col>

					{/* <Col sm={12} md={4} lg={3} className="mb-2">
            <h3><strong>Country B</strong></h3>
            <p>
							Street Address 100<br />
							Contact Name<br />
							+49 123 456 7890<br />
							<a href="https://www.example.com">info@example.com</a>
						</p>
          </Col> */}

					<Col sm={12} md={6} lg={2} className="mb-4">
						<h3>
							<strong>Ce-Fi</strong>
						</h3>
						<Nav defaultActiveKey="/home" as="ul" className="flex-column">
							<Nav.Item as="li">
								<Link className="nav-link" to="/">Home</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link className="nav-link" to="/">Beratung</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link className="nav-link" to="/about-me">Über Uns</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link className="nav-link" to="/contact">Kontakt</Link>
							</Nav.Item>
						</Nav>
					</Col>

					<Col sm={12} md={6} lg={2} className="mb-4">
						<h3>
							<strong>Legal</strong>
						</h3>
						<Nav defaultActiveKey="/" as="ul" className="flex-column">
							<Nav.Item as="li">
								<Link className="nav-link" to="/">Impressum</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link className="nav-link" to="/datenschutz">
									Datenschutz
								</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link className="nav-link" to="/cookie-richtlinie">
									Cookie-Richtlinie
								</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link className="nav-link" to="/cookie-einstellungen">
									Cookie-Einstellungen
								</Link>
							</Nav.Item>
						</Nav>
					</Col>
				</Row>

				<Row className="text-center border-top pt-4">
					<Col md={12} className="text-sm-center text-md-left small">
						© 2020 Copyright. All Rights Reserved
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
