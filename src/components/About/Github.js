import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        My coding<strong className="primary"> day by day.</strong>
      </h2>
      <GitHubCalendar
        username="augustodiaz-dev"
        blockSize={15}
        blockMargin={5}
        color="green"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
