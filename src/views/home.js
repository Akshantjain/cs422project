import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
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
    "&:hover": {
      backgroundColor: "rgba(253, 242, 208, 1)",
    },
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>
          MY DAILY LIFE
          <span>A Simpler way to manage your time</span>
        </h1>

        <div
          className="navRow"
          style={{
            backgroundColor: "rgba(242, 242, 242, 1)",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.161)",
          }}
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
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
