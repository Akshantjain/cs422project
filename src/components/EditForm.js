import { Container, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class EditForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    {this.props.type === "meeting" &&
                        <div><Meeting {...this.props} /></div>}

                    {this.props.type === "reminder" &&
                        <div><Reminder {...this.props} /></div>}

                    {this.props.type === "goal" &&
                        <div><Goal {...this.props} /></div>}

                    {this.props.type === "checklist" &&
                        <div><Checklist {...this.props} /></div>}
                </Container>
            </div>
        )
    }
}

export default EditForm

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            marginRight: theme.spacing(2)
            // width: '25ch',
        },
    },
}));

function Reminder(props) {
    const classes = useStyles();
    return(
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Title"
                    variant="outlined"
                    defaultValue={props.object.title}
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Date"
                    defaultValue={props.object.date}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Time"
                    defaultValue={props.object.time}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Repeat"
                    defaultValue={props.object.repeat}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    multiline
                    id="outlined-required"
                    label="Description"
                    defaultValue={props.object.description}
                    variant="outlined"
                />
            </form>
        </>
    )
}

function Meeting(props) {
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Title"
                    variant="outlined"
                    defaultValue={props.object.title}
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Date"
                    defaultValue={props.object.date}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Time"
                    defaultValue={props.object.time}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Repeat"
                    defaultValue={props.object.repeat}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    multiline
                    id="outlined-required"
                    label="Description"
                    defaultValue={props.object.description}
                    variant="outlined"
                />
            </form>
        </>
    )
}

function Goal(props) {
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Title"
                    variant="outlined"
                    defaultValue={props.object.title}
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Current"
                    defaultValue={props.object.current}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="target"
                    defaultValue={props.object.target}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="change"
                    defaultValue={props.object.change}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="repeat"
                    defaultValue={props.object.repeat}
                    variant="outlined"
                />
                <TextField
                    fullWidth={true}
                    multiline
                    id="outlined-required"
                    label="Description"
                    defaultValue={props.object.description}
                    variant="outlined"
                />
            </form>
        </>
    )
}

function Checklist(props) {
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    fullWidth={true}
                    required
                    id="outlined-required"
                    label="Title"
                    variant="outlined"
                    defaultValue={props.object.title}
                />
                <Typography><b>Checklists Items:</b> (These checkboxes are not working)</Typography>
            </form>
        </>
    )
}