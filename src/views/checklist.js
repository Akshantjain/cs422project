import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";

class Checklist extends React.Component {
  render() {
    

    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Checklists" />
              {this.props.checklists.map((checklist) => (
                  <IndividualItems data={checklist} key={checklist.id} type="checklist" />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Checklist;
