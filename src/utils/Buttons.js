import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core'

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


export class Buttons extends Component {
    render() {
        const myprops = this.props;
        return (
            <Button myprops/>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Buttons)

