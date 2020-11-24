import { Button, Divider } from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Headings from '../utils/headings'
import IndividualItems from '../utils/IndividualItems';
import MyNav from '../components/mynav'


class Overview extends React.Component {

    render() {
        return (
            <div>

                <MyNav></MyNav>
                <Headings data="Overview" date_type={true}/>
                <Container fluid>
                    <Row>
                        <Col>
                            <Headings data="MEETINGS & REMINDERS"/>
                            {this.props.reminders.map((reminder) => (
                                <IndividualItems 
                                    {...this.props}
                                    data={reminder}
                                    key={reminder.id}
                                    type="reminder"
                                />
                            ))}

                            <Divider style={{ backgrondColor: '#adb5bd'}}/>

                            {this.props.meetings.map((meeting) => (
                                <IndividualItems
                                    {...this.props}
                                    data={meeting} 
                                    key={meeting.id} 
                                    type="meeting" 
                                />
                            ))}
                            
                            <Button href="/schedule" variant="contained" size="large" color="primary" style={{ margin: '10px' }}>GOTO SCHEDULE</Button>


                        </Col>
                        <Col xs lg="5">
                            <Container>
                                <Row>
                                    <Col>
                                        <Headings data="GOALS PROGRESS" />
                                        <Button href="/goals" variant="contained" size="large" color="primary" style={{ margin: '5px' }}>GOTO GOALS</Button>
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
                                        <Button  href="/checklists" onClick={this.handleClick1} variant="contained" size="large" color="primary" style={{ margin: '5px' }}>GOTO CHECKLISTS</Button>
                                        <Container style={{display: 'flex'}}>
                                            <div style={{margin: 'auto', padding: '50px 0px'}}>
                                                    TOTAL CHECKLIST: <br></br>
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