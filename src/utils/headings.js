import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import BasicDateTimePicker from './datePicker'
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

export class headings extends Component {
    render() {
        return (
            <div className="date_section">
                {this.props.date_type ?  
                    <>
                        <BasicDateTimePicker />
                        <div style={{marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto'}}>
                            <Button variant="contained" size="large" color="primary">TODAY</Button>
                            <Button style={{ marginLeft: '16px' }} size="large" variant="contained" color="primary">IMPORT</Button>
                        </div>
                    </>
                : 
                <div>
                    {this.props.data}
                </div>
                } 
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(headings)