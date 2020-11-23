import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Divider } from "@material-ui/core";

class Checklist extends React.Component {
  render() {
    const checklist = [
      {
        id: 1,
        title: "Checklist 1",
        items: [
          { id: 1, title: "Item 1" },
          { id: 2, title: "Item 2" },
          { id: 3, title: "Item 3" },
          { id: 4, title: "Item 4" },
          { id: 5, title: "Item 5" },
          { id: 6, title: "Item 6" },
          { id: 7, title: "Item 7" },
          { id: 8, title: "Item 8" },
        ],
      },
      {
        id: 2,
        title: "Checklist 2",
        items: [
          { id: 1, title: "Item 1" },
          { id: 2, title: "Item 2" },
          { id: 3, title: "Item 3" },
          { id: 4, title: "Item 4" },
          { id: 5, title: "Item 5" },
          { id: 6, title: "Item 6" },
          { id: 7, title: "Item 7" },
          { id: 8, title: "Item 8" },
        ],
      },
      {
        id: 3,
        title: "Checklist 3",
        items: [
          { id: 1, title: "Item 1" },
          { id: 2, title: "Item 2" },
          { id: 3, title: "Item 3" },
          { id: 4, title: "Item 4" },
          { id: 5, title: "Item 5" },
          { id: 6, title: "Item 6" },
          { id: 7, title: "Item 7" },
          { id: 8, title: "Item 8" },
        ],
      },
      {
        id: 4,
        title: "Checklist 4",
        items: [
          { id: 1, title: "Item 1" },
          { id: 2, title: "Item 2" },
          { id: 3, title: "Item 3" },
          { id: 4, title: "Item 4" },
          { id: 5, title: "Item 5" },
          { id: 6, title: "Item 6" },
          { id: 7, title: "Item 7" },
          { id: 8, title: "Item 8" },
        ],
      },
    ];

    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Checklists" />
              {checklist.map((post) => (
                <IndividualItems data={post} type="checklist" />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Checklist;
