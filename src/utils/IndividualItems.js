import { Container, Divider, IconButton, Typography } from '@material-ui/core'
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
                        {props.data.title} {props.data.repeat}
                    </span>
                    <span>
                        {props.data.date}
                    </span>
                    <span>
                        {props.data.time}
                    </span>
                </p>
            </div>
            <InfoDialog {...props} handleClose={handleClose} open={open} >
                <Typography >
                    <b>Title:</b> <span> {props.data.title} </span> 
                </Typography>
                <Divider/>
                <Typography >
                    <b>Date & Time:</b> <span> {props.data.date}, {props.data.time}</span>
                </Typography>
                <Divider />
                <Typography >
                    <b>Repeat Type:</b > <span> {props.data.repeat} </span> 
                </Typography>
                <Divider />
                <Typography >
                    <b>Description:</b > <span> {props.data.description} </span> 
                </Typography>
            </InfoDialog>
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
                        {props.data.title} {props.data.repeat}
                    </span>
                    <span>
                        {props.data.date}
                    </span>
                    <span>
                        {props.data.time}
                    </span>
                </p>
            </div>
            <InfoDialog {...props} handleClose={handleClose} open={open} >
                <Typography >
                    <b>Title:</b> <span> {props.data.title} </span>
                </Typography>
                <Divider />
                <Typography >
                    <b>Date & Time:</b> <span> {props.data.date}, {props.data.time}</span>
                </Typography>
                <Divider />
                <Typography >
                    <b>Repeat Type:</b> <span> {props.data.repeat} </span>
                </Typography>
                <Divider />
                <Typography >
                    <b>Description:</b> <span> {props.data.description} </span>
                </Typography>
            </InfoDialog>
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

    const handleIncrease = (e) => {
        props.handleIncrease(props.data.current + props.data.change, props.data.id);
    }

    const handleDecrease = (e) => {
        props.handleIncrease(props.data.current - props.data.change, props.data.id);
    }
    return (
        <>
            <div className="individualItem ">
                <p className="goal">
                    <span onClick={handleClickOpen}>
                        {props.data.title} {' '}
                        {props.data.repeat}
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
            <InfoDialog {...props} handleClose={handleClose} open={open} >
                <Typography >
                    <b>Title:</b> <span> {props.data.title} </span>
                </Typography>
                <Divider />
                <Typography >
                    <b>Repeat Type:</b> <span> {props.data.repeat} </span>
                </Typography>
                <Divider />
                <Typography >
                    <b>Current: </b>
                    <> {props.data.current} </>
                    <span><b>Target:</b> </span>
                    <> {props.data.target} </>
                    <span><b>Increment/Decrement Change:</b></span> 
                    <> {props.data.change} </>
                </Typography>
                <Divider />
                <Typography >
                    <b>Description:</b> <span> {props.data.description} </span>
                </Typography>
            </InfoDialog>
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
                        No of Items: {props.data.noOfItems}
                    </span>
                    <span>
                        <IconButton aria-label="increase" size="small" onClick={handleClickOpen}>
                            <InfoOutlined size="small" />
                        </IconButton>
                    </span>
                </p>
            </div>
            <InfoDialog {...props} handleClose={handleClose} open={open} >
                <Typography>
                    <b>Title: </b> <span>{props.data.title}</span>
                </Typography>
                <Divider /><Typography>
                    <b>Description: </b> <span>{props.data.description}</span>
                </Typography>
                <Divider />
                <Typography>
                    <b>Checklist Items:</b>
                </Typography>
                {props.data.items.map((eachItem) => (
                    <Typography style={{paddingLeft: '25px'}}>
                        <li key={eachItem.id}>
                            {eachItem.status ?
                                <strike>{eachItem.title}</strike>
                                : <span>{eachItem.title}</span>
                            }
                            
                        </li>
                    </Typography>
                ))}
            </InfoDialog>
        </>
    );
}

export default IndividualItems
