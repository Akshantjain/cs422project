import { Container, IconButton } from '@material-ui/core'
import { AddCircleOutlineOutlined, InfoOutlined, RemoveCircleOutlineOutlined } from '@material-ui/icons';
import React, { Component } from 'react'
import CustomizedDialogs from './CustomizedDialogs';

export class IndividualItems extends Component {
    render() {
        return (
            <div>
                <Container>
                    {this.props.type === "meeting" && 
                    <div><Meeting data={this.props.data}/></div>}

                    {this.props.type === "reminder" &&
                    <div><Reminder data={this.props.data}/></div>}

                    {this.props.type === "goal" &&
                    <div><Goal data={this.props.data}/></div>}

                    {this.props.type === "checklist" &&
                    <div><Checklist data={this.props.data}/></div>}
                </Container>
            </div>
        )
    }
}

function Reminder(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <div className=" individualItem" onClick={handleClickOpen}>
                <p className="reminder">
                    <span>
                        {props.data.title}
                    </span>
                    <span>
                        {props.data.time}
                    </span>
                </p>
            </div>
            <CustomizedDialogs data={props.data} handleClose={handleClose} open={open} />
        </>
    );
}

function Meeting(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="individualItem" onClick={handleClickOpen}>
                <p className="meeting">
                    <span>
                        {props.data.title}
                    </span>
                    <span>
                        {props.data.time}
                    </span>
                </p>
            </div>
            <CustomizedDialogs data={props.data} handleClose={handleClose} open={open} />
        </>
    );
}

function Goal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="individualItem " onClick={handleClickOpen}>
                <p className="goal">
                    <span>
                        {props.data.title} {' '}
                        {props.data.type}
                    </span>
                    <span>
                        <IconButton aria-label="increase" size="small">
                            <AddCircleOutlineOutlined size="small"/>
                        </IconButton>
                        {props.data.current}/{props.data.target}
                        <IconButton aria-label="decrease" size="small">
                            <RemoveCircleOutlineOutlined size="small"/>
                        </IconButton>
                    </span>
                    <span>
                        <IconButton aria-label="increase" size="small">
                            <InfoOutlined size="small" />
                        </IconButton>
                    </span>
                </p>
            </div>
            <CustomizedDialogs data={props.data} handleClose={handleClose} open={open} />
        </>
    );
}

function Checklist(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return (
        <>
            <div className="individualItem" onClick={handleClickOpen}>
                <p className="checklist">
                    <span>
                        {props.data.title}
                    </span>
                    <span>
                        {props.data.time}
                    </span>
                </p>
            </div>
            <CustomizedDialogs data={props.data} handleClose={handleClose} open={open} />
        </>
    );
}

export default IndividualItems
