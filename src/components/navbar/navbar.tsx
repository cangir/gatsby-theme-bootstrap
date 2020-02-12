import React from "react";
import { Container, Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";

export const Navbar: React.FC = () => {
	return (
		<BSNavbar collapseOnSelect expand="lg" variant="dark" bg="github">
			<Container>
				<BSNavbar.Brand href="/">Ce-Fi Bildung</BSNavbar.Brand>
				<BSNavbar.Toggle aria-controls="basic-navbar-nav" as="span" className="border-0" />
				<BSNavbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-md-auto align-items-start">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/about-me">Über Uns</Nav.Link>
						<Nav.Link href="/contact">Kontakt</Nav.Link>
					</Nav>
				</BSNavbar.Collapse>
			</Container>
		</BSNavbar>
	);
};
