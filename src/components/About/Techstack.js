import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiCss3,
  DiHtml5
} from "react-icons/di";
import {
  SiNetlify,
  SiBootstrap
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",fontSize:'12px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify/> 
        <h6>Netlify</h6>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> 
        <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> <br />
        <h6>Css</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <br />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 /> <br />
      <h6>Html</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
