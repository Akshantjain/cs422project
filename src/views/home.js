import React, { Component } from "react";
import { Button, Divider, IconButton } from "@material-ui/core";
import { HomeRounded } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "rgba(253, 242, 208, 1)",
    stroke: "rgba(112, 112, 112, 1)",
    filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))",
    height: "306px",
    width: "406px",
    strokeWidth: "2px",
    borderRadius: "10px",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: 500,
    color: "rgba(112,112,112,1)",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{marginTop: '8rem'}}>
        <h1>
          MY DAILY LIFE
          <span style={{fontSize: '16px', paddingLeft: '20px'}}>A Simpler way to manage your time</span>
        </h1>

        <div
          className="navRow"
          style={{marginTop: '3rem'}}
        >
          <Button
            className={classes.root}
            href="/overview"
            size="large"
            variant="outlined"
          >
            Overview
          </Button>
          <Button
            className={classes.root}
            href="/schedule"
            size="large"
            variant="outlined"
          >
            Schedule
          </Button>
          <Button
            className={classes.root}
            href="/goals"
            size="large"
            variant="outlined"
          >
            Goals
          </Button>
          <Button
            className={classes.root}
            href="checklists"
            size="large"
            variant="outlined"
          >
            Checklists
          </Button>
        </div>
        <div style={{ marginTop: '5rem' }} style={{ backgroundColor: 'rgba(242, 242, 242, 1)'}}>
          <Divider />
          <h5>Tutorial: </h5>
          <p>
            The app allows the user to add, edit and delete meetings, reminders, goals and checklists. <br></br>
            In this protptype, there are many things which are not implemented yet, but you can have an idea what we are trying to do over here.<br></br>
            There are four sections in the app, namely, overview, schedule, goals and checklists. <br></br>
            There is hardcoded data in the app for now, but you can use the buttons to see how the interfaces look like for things like add, edit and delete.<br></br>
            Also, in the real-world implementation, we planned to provide the "GOTO TODAY DATE" and "IMPORT DATA" features as well.<br></br> 
            Due to the lack of resources and time, we haven't implemented them in here yet. <br></br>
            You can go to different sections and places to see how the interfaces looks and how you can add, edit and delete the datas. <br></br>
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
