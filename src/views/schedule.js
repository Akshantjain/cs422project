import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Divider } from "@material-ui/core";

class Schedule extends React.Component {
  render() {
    const meeting = [
      { id: 1, title: "Meeting 1", time: "Time 1" },
      { id: 2, title: "Meeting 2", time: "Time 2" },
      { id: 3, title: "Meeting 3", time: "Time 3" },
      { id: 4, title: "Meeting 4", time: "Time 4" },
    ];

    const reminder = [
      { id: 1, title: "Reminder 1", time: "Time 1" },
      { id: 2, title: "Reminder 2", time: "Time 2" },
    ];
    return (
      <div>
        <Headings data="Schedule" date_type={true} />
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Meetings"></Headings>
              <Divider style={{ backgrondColor: "#adb5bd" }} />
              {meeting.map((meeting) => (
                <IndividualItems data={meeting} type="meeting" />
              ))}
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col>
                    <Headings data="Reminders"></Headings>
                    {reminder.map((reminder) => (
                      <IndividualItems data={reminder} type="reminder" />
                    ))}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Schedule;
