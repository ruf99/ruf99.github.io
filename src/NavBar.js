import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./NavBar.css";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const R = require('./images/Logo.png');
    const home = require('./images/home.png');
    const project = require('./images/project.png');
    const publication = require('./images/publication.png');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar sticky="top" expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
        <Navbar.Brand href ="#home">
        <img className="logo-image" src={R} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><h4 className="link-title">Home</h4></Nav.Link>
        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}><h4 className="link-title">Projects</h4></Nav.Link>
        <Nav.Link href="#publication"className={activeLink === 'publication' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('publication')}><h4 className="link-title">Publication</h4></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/rufaidakhan/"><h4 className="link-title">LinkedIn</h4></Nav.Link>
        <Nav.Link href="https://github.com/ruf99"><h4 className="link-title">GitHub</h4></Nav.Link>
        <Nav.Link href="https://ruf99.github.io/my-open-source/"><h4 className="link-title">Blog</h4></Nav.Link>
        </Nav>
        <span className="navbar-text">
        <div className="social-icon">
        <a href="#home"><img src={home} alt="" /></a>
        <a href="#project"><img src={project} alt="" /></a>
        <a href="#publication"><img src={publication} alt="" /></a>
        </div>
        </span>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
    )
}