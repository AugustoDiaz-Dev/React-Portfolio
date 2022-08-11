import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import '../styles/footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AugustoDiaz-Dev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGithub size={24}  />
              </a>
            </li>
             <li className="social-icons">
             <h3>© AD {year}</h3>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/augusto-diaz-dev/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinkedin size={24} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
