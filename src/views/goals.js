import React from "react";
import Headings from "../utils/headings";
import { Col, Container, Row } from "react-bootstrap";
import IndividualItems from "../utils/IndividualItems";
import { Button } from "@material-ui/core";
import EditDialog from "../utils/EditDialog";
import EditForm from "../components/EditForm";
import MyNav from '../components/mynav'


class Goals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goalsopen: false,
    };
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1() {
    this.setState({
      goalsopen: !this.state.goalsopen
    });
  }

  render() {
    return (
      <>
      <div style={{height: '100%'}}>
          <MyNav></MyNav>
        <Container fluid>
          <Row>
            <Col>
              <Headings data="Goals" />
              {/* <Divider style={{ backgrondColor: "#adb5bd" }} /> */}
              {this.props.goals.map((goal) => (
                  <IndividualItems {...this.props} key={goal.id} data={goal} type="goal" />
              ))}
            </Col>
          </Row>
            <Button onClick={this.handleClick1} variant="contained" size="large" color="primary" style={{ margin: '10px' }}>Add New Goal</Button>
        </Container>

          <EditDialog
            open={this.state.goalsopen}
            handleClose={this.handleClick1}
            handleSave={this.handleClick1}
          >
            <EditForm type="goal" object={{
              id: 1,
              title: "",
              repeat: "",
              current: 0,
              target: 0,
              change: 0,
              description: ''
            }} />
          </EditDialog>

      </div>
      </>
    );
  }
}

export default Goals;
