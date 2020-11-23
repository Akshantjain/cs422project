import { Divider } from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Headings from '../utils/headings'
import IndividualItems from '../utils/IndividualItems';




class Overview extends React.Component {
    
    render() {
        const reminders = [
            { id: 1, title: 'Reminder 1', time: 'Time 1' },
            { id: 2, title: 'Reminder 2', time: 'Time 2' },
        ]
        const meetings = [
            { id: 1, title: 'Meeting 1', time: 'Time 1' },
            { id: 2, title: 'Meeting 2', time: 'Time 2' },
            { id: 3, title: 'Meeting 3', time: 'Time 3' },
            { id: 4, title: 'Meeting 4', time: 'Time 4' }
        ];

        return (
            <div>
                <Headings data="Overview" date_type={true}/>
                <Container fluid>
                    <Row>
                        <Col>
                            <Headings data="MEETINGS & REMINDERS"/>
                            {reminders.map((reminder) => (
                                <IndividualItems data={reminder} type="reminder"/>
                            ))}
                            <Divider style={{ backgrondColor: '#adb5bd'}}/>
                            {meetings.map((meeting) => (
                                <IndividualItems data={meeting} type="meeting" />
                            ))}
                        </Col>
                        <Col xs lg="5">
                            <Container>
                                <Row>
                                    <Col>
                                        <Headings data="GOALS PROGRESS" />
                                        <Example>
                                            <CircularProgressbar
                                                value={66}
                                                text={`66%`}
                                                background
                                                backgroundPadding={6}
                                                styles={buildStyles({
                                                    backgroundColor: "#3e98c7",
                                                    textColor: "#fff",
                                                    pathColor: "#fff",
                                                    trailColor: "transparent"
                                                })}
                                            />
                                        </Example>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Headings data="CHECKLISTS PROGRESS" />
                                        <Container style={{display: 'flex'}}>
                                            <div style={{margin: 'auto', padding: '50px 0px'}}>
                                                    TOTAL CHECKLIST ITEMS: <br></br>
                                                    ITEMS DONE: <br></br>
                                                    ITEMS REMAINING: <br></br>
                                                    CHECKLISTS COMPLETED: <br></br> 
                                            </div>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function Example(props) {
    return (
        <div style={{ marginBottom: 40 }}>
            <div style={{ marginTop: 30, display: "flex" }}>
                <div style={{ width: "45%", margin: 'auto'}}>{props.children}</div>
            </div>
        </div>
    );
}

export default Overview;