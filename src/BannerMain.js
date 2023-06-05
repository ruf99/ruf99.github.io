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
          <h1 className="about-me-title">About Me</h1>
          </Row>
          <br>
          </br>
          <Row className="About-Me-Description">
          <p className="about-me-para"> Hello! My name is Rufaida Khan. I started my academic journey with Political Science at the University of Delhi (India), <br></br>but wanted to have a more technical background as well, which resulted in my transferring to New York University (NYU)! <br></br>
          Presently, I am a senior at NYU studying Computer Science and Politics. I've spent the last three years working across different areas of tech <br></br>ranging from front-end development, back-end development,  social media management,  <br></br>to my current role in developing a better understanding of open-source software and data management. <br></br>
        <br></br>
        Currently focused on researching, learning and coding as much as I can, while also spending the holidays on perfecting my NY-cheesecake recipe, <br></br>
        reading Pride & Prejudice for the 7th time, and pet sitting my neighbour's cat. <br></br>
      
        </p>
          </Row>
           </Container>
        </section>
        <br></br>
        <br></br>
        <section className="project" id="project">
        <Container className="Project-Container">
        <Row className="Row1-Projects">
          <h1 className="project-title">Projects</h1>
        </Row>
        <br></br>
        
        <br></br>
          <Row>
            <Col>
            <a className = "db-link-title" href="https://tangym27.github.io/DrinkingBuddies-Proj/">Drinking Buddies </a>
            <br></br>
            <br></br>
            <br></br>
              <a className = "db-link" href="https://tangym27.github.io/DrinkingBuddies-Proj/">
              <div class='card1'>
            <div class='info1'>
              <h4 className="project-description-paragraph">Description</h4>
              <div className="db-para">
                <p>Drinking Buddies is a website aimed at users who are <br></br>starting out on their alcohol journey. It is meant to serve <br></br>as a 101 Guide for the user, whilst ensuring safe <br></br>practices are followed.
                <br></br>The website provides the user with a quiz, <br></br>a variety of drinks categorized by alcohol-type, <br></br>as well as a Blood Alcohol Content calculator <br></br>to help keep track of how much alcohol was consumed. <br></br>
                There are a number of helpful resources as well, such as <br></br>cab services and FAQs to provide <br></br>appropriate instructions for the user if/when needed.
                </p>
              </div>
            </div>
          </div>
          </a>
          <br></br>
          <br></br>
            </Col>

            <Col>
            <a className = "cherry-title-link" href="https://rufaida99-k.github.io/javascript/index.html">Cherry Blossoms </a>
            <br></br>
            <br></br>
            <br></br>
            <a className = "cherry-link" href="https://rufaida99-k.github.io/javascript/index.html">
          <div class='card2'>
            <div class='info2'>
              <h4 className="project-description-paragraph">Description</h4>
              <div className="cherry-para">
                <p><br></br>Cherry Blossoms is a website that perfectly captures the <br></br>immense love I have for New York during Spring. <br></br> 
                I included research I had done on the history of how <br></br> cherry blossoms made their way to New York, <br></br> all the way from Japan back in the early 1900's. 
                <br></br>
                <br></br>I made this website as an ode to anyone who <br></br>  felt the same way I did about the changing weather, <br></br> and the perfectly blossomed flowers, <br></br> that are a delight to witness. <br></br>
                <br></br>
                
                </p>
              </div>
            </div>
          </div>
        </a>
        <br></br>
        <br></br>
            </Col>

            <Col>
            <a className="polaroid-title-link" href="https://rufaida99-k.github.io/final_project/index.html">Polaroid Diaries </a>
            <br></br>
            <br></br>
            <br></br>
            <a className = "polaroid-link" href="https://rufaida99-k.github.io/final_project/index.html">
            <div class='card3'>
            <div class='info3'>
              <h4 className="project-description-paragraph">Description</h4>
              <div className="polaroid-para">
                <p><br></br>Polaroid Diaries is a pictorial diary of some of the best <br></br> moments I have experienced over the past five years. <br></br>
                From gazing at the twinkling lights, <br></br> to freezing while watching the lunar eclipse,  <br></br>and reading poetry, this website has a picture <br></br>representing  each moment in my life  <br></br>that felt surreal.
                
                </p>
              </div>
            </div>
          </div>
            </a>
            <br></br>
            <br></br>
            </Col>
          </Row>
        </Container>
        
      </section>
      <br></br>
      <section className="publication" id="publication">
        <Container className="publication-container">
        <Row className="Publication-Title">
          <h1 className="publication-title-class">Publication</h1>
        </Row>
        <br></br>
        <Row className="Description-Publication">
        </Row>
        <br></br>
          <Row className="Publication-Details">
          <a className="armchair-title-heading" href="https://armchairjournal.com/armchair-critics-neoliberal-democracies-class/">The ArmChair Journal: The Awkward Bourgeois</a>
            
            <p>
            <br></br>
            <br></br>
              <a className="publication-link" href="https://armchairjournal.com/armchair-critics-neoliberal-democracies-class/">
              <div class='card4'>
            <div class='info4'>
              <h4 className="project-description-paragraph">Description</h4>
              <br></br>
              <p className="publication-para">I wrote an opinion piece that was published by the Armchair Journal, which was focused on the Indian middle-class's role <br></br>in political processes and the democratic process overall. <br></br> 
              <br></br>
               It addresses various topics, such as that of public policy,  <br></br>self-governance,  and a growing apathy amongst citizens <br></br> toward political pariticipation. </p>

            </div>
          </div>


              </a>
            </p>
            
          </Row>
          <br></br>
            <br></br>
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