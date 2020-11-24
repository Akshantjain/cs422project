import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Divider } from "@material-ui/core";

class Goals extends React.Component {
  render() {
    
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Goals" />
              <Divider style={{ backgrondColor: "#adb5bd" }} />
              {this.props.goals.map((goal) => (
                  <IndividualItems key={goal.id} data={goal} type="goal" />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Goals;
