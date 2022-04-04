import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import back from "../../Assets/Projects/basic.jpg";
import clock from "../../Assets/Projects/dclock.png";
import todo from "../../Assets/Projects/cards.png";
import rblog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ rblog}
              isBlog={false}
              title="React Blog App"
              description="It includes capabilities React.JS and React Router mainly. While developing this project I understand that how I can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables by using HTML, CSS, JavaScript , React.JS"
              link="https://github.com/ajayadavikatla14/blog"
              link1= "https://nostalgic-ramanujan-780c57.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ todo}
              isBlog={false}
              title="To do App"
              description="This projects includes JavaScript,CSS,HTML.I have created multiple components with same scripting and interpreted languages like To do App UI Web, To do App UI Mobile and To Do App JS.I have used multiple DOM functions which made the static application a dynamic one."
              link="https://github.com/ajayadavikatla14/todo_project5"
              link1="https://ajayadavikatla14.github.io/todo_project5/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="Digital Clock created by using JavaScript and scripting language HTML and CSS, we look closely at the JavaScript code behind a clock. It includes multiple functions and created a clock and make it response on a particular time for taking tasks"
              link="https://github.com/ajayadavikatla14/project-4"
              link1= "https://ajayadavikatla14.github.io/project-4/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={back}
              isBlog={false}
              title="Building an HTML page"
              description="Backtracking created by using HTML. It shows how a normal text looks on windows, By using all tags in HTML and giving some styles in it."
              link="https://github.com/ajayadavikatla14/git-session-1"
              link1="https://ajayadavikatla14.github.io/git-session-1/project/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
