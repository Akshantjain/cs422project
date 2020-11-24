import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Button, Divider } from "@material-ui/core";
import EditForm from "../components/EditForm";
import EditDialog from "../utils/EditDialog";
import MyNav from '../components/mynav'

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      meetingopen: false,
      reminderopen: false
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1() {
    this.setState({
      meetingopen: !this.state.meetingopen
    });
  }

  handleClick2() {
    this.setState({
      reminderopen: !this.state.reminderopen
    });
  }

  render() {
    return (
      <div>
        <MyNav></MyNav>
        <Headings data="Schedule" date_type={true} />
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Meetings"></Headings>
              <Divider style={{ backgrondColor: "#adb5bd" }} />
              {this.props.meetings.map((meeting) => (
                <IndividualItems {...this.props} key={meeting.id} data={meeting} type="meeting" />
              ))}
              <Button onClick={this.handleClick1} variant="contained" size="large" color="primary" style={{ margin: '10px' }}>Add New Meeting</Button>
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col>
                    <Headings data="Reminders"></Headings>
                    {this.props.reminders.map((reminder) => (
                      <IndividualItems {...this.props} key={reminder.id} data={reminder} type="reminder" />
                    ))}
                    <Button onClick={this.handleClick2} variant="contained" size="large" color="primary" style={{ margin: '10px' }}>Add New Reminder</Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <EditDialog
          open={this.state.meetingopen}
          handleClose={this.handleClick1}
          handleSave={this.handleClick1}
        >
          <EditForm type="meeting" object={{ id: 1, repeat: '', title: '', date: '', time: '', description: '' }} />
        </EditDialog>

        <EditDialog
          open={this.state.reminderopen}
          handleClose={this.handleClick2}
          handleSave={this.handleClick2}
        >
          <EditForm type="reminder" object={{ id: 1, repeat: '', title: '', date: '', time: '', description: '' }} />
        </EditDialog>

        {/* <EditForm type="meeting" open={this.state.meetingopen} object={{ id: 1, repeat: '', title: '', date: '', time: '', description: '' }}/>
        <EditForm type="reminder" open={this.state.reminderopen} object={{ id: 1, repeat: '', title: '', date: '', time: '', description: '' }}/> */}
      </div>
    );
  }
}

export default Schedule;