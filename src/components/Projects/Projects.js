import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgPlaceholder from "../../Assets/projects/webatar.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          RECENT <strong className="primary">WORKS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've been working on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgPlaceholder}
              isBlog={false}
              title="My title"
              description="Project 1"
              ghLink="https://github.com/AugustoDiaz-Dev"
              demoLink="https://github.com/AugustoDiaz-Dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgPlaceholder}
              isBlog={false}
              title="My title"
              description="Project 2"
              ghLink="https://github.com/AugustoDiaz-Dev"
              demoLink="https://github.com/AugustoDiaz-Dev" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgPlaceholder}
              isBlog={false}
              title="My title"
              description="Project 3"
              ghLink="https://github.com/AugustoDiaz-Dev"
              demoLink="https://github.com/AugustoDiaz-Dev"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
