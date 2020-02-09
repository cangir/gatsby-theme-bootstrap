import React from "react";
import Helmet from "react-helmet";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Hero, Footer, ScrollToTop } from "../";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC = ({ children }: Props) => {
  return (
    <div className="page" style={{ position: "relative" }}>
      <Helmet
        bodyAttributes={{
          class: "theme-light",
        }}
      />
      <Navbar collapseOnSelect expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about-me">Über Uns</Nav.Link>
              <Nav.Link href="/contact">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      <div className="content">
        <main className="container">
          {children}
          <p className="empty-title h3">No results found</p>
          <p className="empty-subtitle text-muted">
            Try adjusting your search or filter to find what you are looking for.
          </p>
          <div className="empty-action">
            <a href="./." className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add your first client
            </a>
          </div>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
