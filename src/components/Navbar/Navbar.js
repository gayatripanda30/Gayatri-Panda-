import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const Header = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    /* Navbar background change on scroll */

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);


    /* Active section highlight */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((section) => observer.observe(section));


    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>

        {/* Logo + Name */}
        <Navbar.Brand href="#home" className="brand">

          <div className="logo-avatar">
            GP
          </div>

          <span className="brand-name">
            Gayatri Panda
          </span>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link
  href="#home"
  className={`nav-item ${activeLink === "home" ? "active-nav" : ""}`}
>
  Home
</Nav.Link>

<Nav.Link
  href="#about"
  className={`nav-item ${activeLink === "about" ? "active-nav" : ""}`}
>
  About
</Nav.Link>

<Nav.Link
  href="#skills"
  className={`nav-item ${activeLink === "skills" ? "active-nav" : ""}`}
>
  Skills
</Nav.Link>

<Nav.Link
  href="#projects"
  className={`nav-item ${activeLink === "projects" ? "active-nav" : ""}`}
>
  Projects
</Nav.Link>

<Nav.Link
  href="#contact"
  className={`nav-item ${activeLink === "contact" ? "active-nav" : ""}`}
>
  Contact
</Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;