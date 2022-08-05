import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Glad to see you here! I am <span className="primary">Augusto Diaz </span>
            from <span className="primary"> Argentina.</span>
            <br />I am a Full Stack Developer based in Russia but open for new opportunities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Write Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel around the world
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          There won't be much to learn. In fact, we'll spend most of our time unlearning.{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
