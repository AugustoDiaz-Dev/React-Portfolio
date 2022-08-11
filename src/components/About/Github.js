import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", marginBottom: "3rem" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        My<strong className="primary"> Coding</strong>
      </h2>
      <GitHubCalendar
        username="augustodiaz-dev"
        blockSize={16}
        blockMargin={4}
        color="#0c77b5"
        fontSize={10}
        showWeekdayLabels={true}
      />
    </Row>
  );
}

export default Github;
