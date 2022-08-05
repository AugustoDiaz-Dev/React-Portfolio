import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="primary"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a software developer with a passion for building web applications and learn new technologies to get the things done in the most efficient way. 
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="primary">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="primary">
                  mobile applications. 
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LIKE WHAT YOU SEE?</h1>
            <p>
              Feel free to <span className="primary">connect </span>with me on:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AugustoDiaz-Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/AugustoDiaz-Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/AugustoDiaz-Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
