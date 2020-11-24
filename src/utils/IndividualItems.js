import { Container, IconButton } from '@material-ui/core'
import { AddCircleOutlineOutlined, InfoOutlined, RemoveCircleOutlineOutlined } from '@material-ui/icons';
import React, { Component } from 'react'
import InfoDialog from './InfoDialog';

export class IndividualItems extends Component {
    render() {
        return (
            <div>
                <Container>
                    {this.props.type === "meeting" && 
                        <div><Meeting {...this.props}/></div>}

                    {this.props.type === "reminder" &&
                        <div><Reminder {...this.props}/></div>}

                    {this.props.type === "goal" &&
                        <div><Goal {...this.props} /></div>}

                    {this.props.type === "checklist" &&
                        <div><Checklist {...this.props}/></div>}
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
            <InfoDialog {...props} handleClose={handleClose} open={open} />
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
            <InfoDialog {...props} handleClose={handleClose} open={open} />
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

    const handleIncrease = () => {

    }

    const handleDecrease = () => {

    }
    return (
        <>
            <div className="individualItem ">
                <p className="goal">
                    <span>
                        {props.data.title} {' '}
                        {props.data.type}
                    </span>
                    <span>
                        <IconButton aria-label="increase" size="small" onClick={handleIncrease}>
                            <AddCircleOutlineOutlined size="small"/>
                        </IconButton>
                        {props.data.current}/{props.data.target}
                        <IconButton aria-label="decrease" size="small" onClick={handleDecrease}>
                            <RemoveCircleOutlineOutlined size="small"/>
                        </IconButton>
                    </span>
                    <span>
                        <IconButton aria-label="increase" size="small" onClick={handleClickOpen}>
                            <InfoOutlined size="small" />
                        </IconButton>
                    </span>
                </p>
            </div>
            <InfoDialog {...props} handleClose={handleClose} open={open} />
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

    return (
        <>
            <div className="individualItem" onClick={handleClickOpen}>
                <p className="checklist">
                    <span>
                        {props.data.title}
                    </span>

                    <span>
                        <IconButton aria-label="increase" size="small" onClick={handleClickOpen}>
                            <InfoOutlined size="small" />
                        </IconButton>
                    </span>
                </p>
            </div>
            <InfoDialog {...props} handleClose={handleClose} open={open} />
        </>
    );
}

export default IndividualItems
