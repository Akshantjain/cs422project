import React from 'react'
import {Button, IconButton} from '@material-ui/core'
import { HomeRounded } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        backgroundColor: 'rgba(253, 242, 208, 1)',
        stroke: 'rgba(112, 112, 112, 1)',
        filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))',
        width: '406px',
        strokeWidth: '2px',
        borderRadius: '10px',
		fontFamily: 'Helvetica Neue',
		fontStyle: 'normal',
		fontWeight: 500,
        color: 'rgba(112,112,112,1)',
        '&:hover': {
            backgroundColor: 'rgba(253, 242, 208, 1)',
        },
    }
});

class MyNav extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div className="navRow" style={{ backgroundColor: 'rgba(242, 242, 242, 1)', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.161)'}}>
                <Button className={classes.root} href="/overview" size="large" variant="outlined">Overview</Button>
                <Button className={classes.root} href="/schedule" size="large" variant="outlined">Schedule</Button>
                <IconButton className="IconButton" href="/" aria-label="home">
                    <HomeRounded style={{ fill: 'rgba(106, 123, 195, 1)'}}/>
                </IconButton>
                <Button className={classes.root} href="/goals" size="large" variant="outlined">Goals</Button>
                <Button className={classes.root} href="checklists" size="large" variant="outlined">Checklists</Button>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(MyNav);