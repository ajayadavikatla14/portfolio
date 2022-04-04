import React from "react";
import Card from "react-bootstrap/Card";
import { VscActivateBreakpoints } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am  <span className="purple">  Ajay Babu  </span>
            from <span className="purple">  vijayawada, Andhra Pradesh , India. </span>
            <br />I am currently pursuing MERN-Full Satck Web Developer in Prepbytes.
            <br />
            <br />
             some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <VscActivateBreakpoints /> &nbsp; Watching Web series
            </li>
            <li className="about-activity">
              <VscActivateBreakpoints /> &nbsp; Following Tech-News
            </li>
            <li className="about-activity">
              <VscActivateBreakpoints /> &nbsp; Solving Puzzles
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
