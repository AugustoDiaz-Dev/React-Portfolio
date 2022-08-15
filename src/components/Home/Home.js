import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <main>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h2 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  &#128187;
                </span>
              </h2>

              <h1 className="heading-name">
                I'm
                <br/>
                <strong className="main-name"> Augusto Diaz</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20}}>
              <img
                src={homeImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "100vh", borderRadius: "4rem" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </main>
  );
}

export default Home;
