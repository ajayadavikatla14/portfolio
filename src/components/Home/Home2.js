import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> little about </span> myself
            </h1>
            <p className="home-about-body">
            I'm a self-taught programmer who is passionate about Web Development
              <br />
              <br />Passionate learner and a developer in 
              <i>
                <b className="purple"> React, Javascript, Git , CSS, HTML </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt></Tilt> */}
            <img src={myImg} className="img-fluid" alt="avatar" height="200px" width="200px" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME </h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p><strong>
            <div itemscope itemtype="https://schema.org/LocalBusiness">
                Phone Number : <span itemprop="telephone"><a href="tel:+916303099433">
                +91 9154543021</a></span>
                </div>
                <div itemscope itemtype="https://schema.org/LocalBusiness">
                Email ID : <span itemprop="email"><a href="mailto:ravigedela1729@gmail.com"> ajayadavikatla14@gmail.com </a></span>
                </div>   </strong>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ajayadavikatla14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ajay-adavikatla-519651202/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
