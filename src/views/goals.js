import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Divider } from "@material-ui/core";

class Goals extends React.Component {
  render() {
    const goal = [
      {
        id: 1,
        title: "Goal 1",
        type: "Weekly",
        current: 3,
        target: 12,
        change: 20,
      },
      {
        id: 2,
        title: "Goal 2",
        type: "Daily",
        current: 3,
        target: 12,
        change: 20,
      },
      {
        id: 3,
        title: "Goal 3",
        type: "Monthly",
        current: 3,
        target: 12,
        change: 20,
      },
      {
        id: 4,
        title: "Goal 4",
        type: "Yearly",
        current: 3,
        target: 12,
        change: 20,
      },
      {
        id: 5,
        title: "Goal 5",
        type: "Weekly",
        current: 3,
        target: 12,
        change: 20,
      },
    ];
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Goals" />
              <Divider style={{ backgrondColor: "#adb5bd" }} />
              {goal.map((post) => (
                <IndividualItems data={post} type="goal" />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Goals;
