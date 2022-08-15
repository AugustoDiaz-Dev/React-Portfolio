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
              I'm a software developer interested in building Web Applications. I love to learn new technologies in order to get the things done in the most efficient way. 
              <br />
              <br />
              My personal aims are targeted to build new &nbsp;
              <i>
                <b className="primary">Web Technologies and Products.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="primary">Node.js</b> and
              <i>
                <b className="primary">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="primary"> React.js, Gatsby and NextJS.</b>
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
