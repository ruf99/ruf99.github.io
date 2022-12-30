import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

import "./BannerMain.css";

export const BannerMain = () => {
    
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const time_passed = 120;
    const thisIsWelcome = "Welcome to Rufaida's Website!";
    const face_me = require('./images/face.jpg');
    const [delta, setDelta] = useState(250);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const cherryNYC = require("./images/cherryNYC.png");
    const polaroid = require("./images/polaroid.png");
    const DB = require("./images/DB.png");
    const armchair = require("./images/Armchair.png");

    useEffect(() => {
        let tick = setInterval(() => {
            ticker();
        }, delta)

        return () => { clearInterval(tick)};
    }, [text])

    const ticker = () => {
        let fullText = thisIsWelcome;
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta-10);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(time_passed);                                  //speed with which text disappears off screen
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(420);                    //speed with which text appears on screen

        }
    }

    useEffect(() => {
      const onScroll = () => {
          if (window.scrollY > 50) {
              setScrolled(true);
          }
          else {
              setScrolled(false);
          }
      }

      window.addEventListener("scrolled", onScroll);
      return () => window.removeEventListener("scrolled", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }
  
    return (
        <div className="mainDiv">
        <section className="banner">
        <Container className="Banner-Container" id="home">
        
            <Row className="align-items-center">
            <Col xs={12} md={6} xl={5}>
                <img className = "face_me" src={face_me} alt="Header"></img> 
                
                </Col>
                <Col xs={12} md={6} xl={7}>
                
                    
                    <p className="this-is-opening-line">{text}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><h4 className="introduction-line">About Me</h4></Nav.Link>
                  
                    
                    
                </Col>
            </Row>
            
        </Container>
        </section>
        <section className="About" >
        <Container className="About-Me-Container" id="About" >
          <Row className="About-Title">
          <h1>About Me</h1>
          </Row>
          <br>
          </br>
          <Row className="About-Me-Description">
          <p> name, college, why you're studying this stuff, what you wanna do, maybe a few hobbies.
        </p>
          </Row>
           </Container>
        </section>
        <br></br>
        <br></br>
        <section className="project" id="project">
        <Container className="Project-Container">
        <Row className="Row1-Projects">
          <h1>Projects</h1>
        </Row>
        <br></br>
        <Row>
          
          <p>this is the projects description</p>
        </Row>
        <br></br>
          <Row>
            <Col>
            <p className="Drinking-Buddies-Title"> Drinking Buddies <br></br>
              <a className = "db-link" href="https://tangym27.github.io/DrinkingBuddies-Proj/"><img className="DB" alt="DB" src={DB} ></img></a>
              </p>
            </Col>
            <Col>
            <p className="Cherry-Blossom-Title"> Cherry Blossoms <br></br>
            <a className = "cherry-link" href="https://ruf99.github.io/javascript/index.html"><img className="cherryNY" alt="cherry" src={cherryNYC} ></img> </a>
            </p>
            </Col>
            <Col>
            <p className="Polaroid-Title"> Polaroid Diaries <br></br>
            <a className = "polaroid-link" href="https://ruf99.github.io/final_project/index.html"><img className="Polaroid" alt="polaroid" src={polaroid} ></img></a>
            </p>
            </Col>
          </Row>
        </Container>
        
      </section>
      <br></br>
      <section className="publication" id="publication">
        <Container className="publication-container">
        <Row className="Publication-Title">
          <h1>Publication</h1>
        </Row>
        <br></br>
        <Row className="Description-Publication">
          <p>Very brief description of why you wrote this shit</p>
        </Row>
        <br></br>
          <Row className="Publication-Details">
            <p>
              <a className="publication-link" href="https://armchairjournal.com/armchair-critics-neoliberal-democracies-class/"><img alt="ArmChair" className = "armchair-image" src={armchair} ></img></a>
            </p>
          </Row>
        </Container>
      </section>
      <br></br>
      <br></br>
      <section className="footer">
        <Container className="footer-Container" id="footer">
         
        </Container>
      </section>

      </div>
    )
}