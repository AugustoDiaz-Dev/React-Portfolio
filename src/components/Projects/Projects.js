import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leSserafim from "../../Assets/projects/heroLeSserafim.png";
import interViews from "../../Assets/projects/heroInterViews.png";
import egds from "../../Assets/projects/heroEgds.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h2 className="project-heading">
          RECENT <strong className="primary">WORKS </strong>
        </h2>
        <p style={{ color: "white" }}>
          Some of my latest projects...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leSserafim}
              isBlog={false}
              title="Le Sserafim"
              description="Korean K-Pop band Website. Tools: Gatsby, GraphQL, Framer Motion, Vercel."
              ghLink="https://github.com/AugustoDiaz-Dev/Gatsby-LeSserafim"
              demoLink="https://le-sserafim.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interViews}
              isBlog={false}
              title="Inter-Views"
              description="Blogs about JavaScript and MERN stack. Tools: Next.js, TypeScript, FramerMotion, Mdx, Vercel."
              ghLink="https://github.com/AugustoDiaz-Dev/NextJS-Inter-Views"
              demoLink="inter-views.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={egds}
              isBlog={false}
              title="El gusto de Sonia"
              description="E-Commerce application for a small shop. Tools: React, Tailwind, Firebase, Redux, Kapwing, Figma, Framer Motion, Vercel."
              ghLink="https://github.com/AugustoDiaz-Dev/React_E-Commerce-Template"
              demoLink="https://egds.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
