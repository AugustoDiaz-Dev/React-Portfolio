import React from "react";
import Card from "react-bootstrap/Card";
import { MdPiano } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";

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
            Apart from coding, some other activities that I love to do are:
          </p>
          <br/>
          <ul>
            <li className="about-activity">
              <MdPiano style={{color: "var(--myPrimary)"}} />&nbsp; Playing Piano
            </li>
            <li className="about-activity">
              <BsPencilFill style={{color: "var(--myPrimary)"}} />&nbsp; Write Tech Blogs
            </li>
            <li className="about-activity">
              <MdCardTravel style={{color: "var(--myPrimary)"}} />&nbsp; Travel
            </li>
          </ul>
        <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
          "There won't be much to learn. In fact, we'll spend most of our time unlearning."{" "}
          </p>
          <div className="blockquote-footer">Anonymous</div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
