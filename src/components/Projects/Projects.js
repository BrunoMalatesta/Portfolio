import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Las Conde E-Commerce"
              description="Electronic commerce developed for Las Conde bookstore created with react.js, Material-UI and Firebase. It has functions that allow the user to send messages in real time, make purchases in real time and manage stock.The work got 10/10 in React.js CoderHouse Academy."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Casa Stella"
              description="Electronic commerce developed for the Casa Stella bookstore created with JavaScript.js, Html, Css, Git and Node.js and Anime.js (library) It has functions that allow the user to send emails to the company, simulate purchases.
              The work got 10/10 in JavaScript.js CoderHouse Academy."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Puerto Deseado Tourism"
              description="First Web Page, Developed for the municipality of Puerto Deseado Argentina, focusing on its natural reserve with abundant Fauna and Flora as well as its History and Tourist Activities.
              It has information on hotels and restaurants.
              Created only based on HTML5, CSS AND SASS. applying first knowledge in Git and GitHub.The work got 9/10 in Desarollo Web CoderHouse Academy."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
