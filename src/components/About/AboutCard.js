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
            Glad to see you here! I am <span className="secondary">Augusto Diaz </span>
            from <span className="secondary"> Argentina.</span>
            <br />I am a Full Stack Developer looking for new opportunities.
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <br/>
          <ul>
            <li className="about-activity">
              <MdPiano className="primary" />&nbsp; Play Piano
            </li>
            <li className="about-activity">
              <BsPencilFill className="primary" />&nbsp; Write Tech Blogs
            </li>
            <li className="about-activity">
              <MdCardTravel className="primary" />&nbsp; Travel
            </li>
          </ul>
        <br/>
        <hr/>
          <p className="secondary">
          "There won't be much to learn. In fact, we'll spend most of our time unlearning."{" "}
          </p>
          <div className="primary">Anonymous</div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
