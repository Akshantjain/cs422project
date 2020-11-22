import React from 'react'
import {Button, IconButton} from '@material-ui/core'
import { HomeRounded } from '@material-ui/icons';

class MyNav extends React.Component {
    render() {
        return(
            <div className="navRow">
                <Button href="/overview" size="large" variant="outlined">Overview</Button>
                <Button href="/schedule" size="large" variant="outlined">Schedule</Button>
                <IconButton href="/" aria-label="home">
                    <HomeRounded/>
                </IconButton>
                <Button href="/goals" size="large" variant="outlined">Goals</Button>
                <Button href="checklists" size="large" variant="outlined">Checklists</Button>
            </div>
        )
    }
}

export default MyNav;