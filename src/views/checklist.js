import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Button } from "@material-ui/core";
import EditDialog from "../utils/EditDialog";
import EditForm from "../components/EditForm";
import MyNav from '../components/mynav'


class Checklist extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      checklistopen: false,
    };
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1() {
    this.setState({
      checklistopen: !this.state.checklistopen
    });
  }
  render() {
    return (
      <div>
        <MyNav></MyNav>
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Checklists (The Checklists Edit options are not implemented yet due to some complex problems)" />
              {this.props.checklists.map((checklist) => (
                  <IndividualItems {...this.props} data={checklist} key={checklist.id} type="checklist" />
              ))}
            </Col>
          </Row>
          <Button onClick={this.handleClick1} variant="contained" size="large" color="primary" style={{ margin: '10px' }}>Add New Checklist</Button>
        </Container>

        <EditDialog
          open={this.state.checklistopen}
          handleClose={this.handleClick1}
          handleSave={this.handleClick1}
        >
          <EditForm type="checklist" object={{ id: 1, repeat: '', title: '', date: '', time: '', description: '' }} />
        </EditDialog>

      </div>
    );
  }
}

export default Checklist;
