
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  return (
    <Navbar expand="md" fixed="top" className="header-blurred-bg" data-bs-theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand href="#home" className="fs-4 fw-bold gradient-text text-decoration-none">AK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-md-4">
            {navLinks.map((link) => (
              <Nav.Link key={link.name} href={link.href} className="text-decoration-none" style={{color: 'hsl(var(--foreground) / 0.8)', transition: 'color 0.3s'}}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
