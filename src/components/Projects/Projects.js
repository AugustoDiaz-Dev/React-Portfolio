import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leSserafim from "../../Assets/projects/heroLeSserafim.png";
import blueOrange from "../../Assets/projects/heroBlueOrange.png";
import interViews from "../../Assets/projects/heroInterViews.png";
import resumeElena from "../../Assets/projects/heroResumeElena.png";
import vostokIt from "../../Assets/projects/heroDVostokIt.png";
// import interViews from "../../Assets/projects/heroInterViews.png";

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
              imgPath={leSserafim}
              isBlog={false}
              title="Le Sserafim"
              description="Korean K-Pop girl's band. Tools: Gatsby, GraphQL, Vercel."
              ghLink="https://github.com/AugustoDiaz-Dev/Gatsby-LeSserafim"
              demoLink="https://le-sserafim.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interViews}
              isBlog={false}
              title="Inter-Views"
              description="Blogs about JavaScript and MERN stack. Tools: Next.js, TypeScript, Mdx."
              ghLink="https://github.com/AugustoDiaz-Dev/NextJS-Inter-Views"
              demoLink="inter-views.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blueOrange}
              isBlog={true}
              title="Blue Orange"
              description="Website of Language's School. Tools: Tilda, Figma."
              ghLink="http://blueorangeschool.tilda.ws/"
              demoLink="http://blueorangeschool.tilda.ws/"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeElena}
              isBlog={false}
              title="Elena Toporova"
              description="Resume in Chinese. Tools: HTML, CSS, JS, Bootstrap."
              ghLink="https://website-chinese-language.vercel.app/"
              demoLink="https://website-chinese-language.vercel.app/"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vostokIt}
              isBlog={true}
              title="D-Vostok IT"
              description="D-Vostok IT Company. Tools: Tilda, Figma."
              ghLink="http://dvostokit.tilda.ws/"
              demoLink="http://dvostokit.tilda.ws/"  
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blueOrange}
              isBlog={false}
              title="Blue Orange"
              description="Website of Language's School. Tools: Tilda, Figma."
              ghLink="http://blueorangeschool.tilda.ws/"
              demoLink="http://blueorangeschool.tilda.ws/"  
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
