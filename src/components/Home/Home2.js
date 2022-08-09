import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="primary"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
              I'm a software developer with a passion for building Web Applications. I love to learn new technologies ir order to get the things done in the most efficient way. 
              <br />
              <br />
              My personal interests are targeted to building new &nbsp;
              <i>
                <b className="primary">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="primary">
                  Web3.0 
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="primary">Node.js</b> and
              <i>
                <b className="primary">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="primary"> React.js, Gatsby and Next.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
