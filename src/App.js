import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import MyNav from './components/mynav'

import Overview from './views/overview'
import Goals from './views/goals'
import Checklist from './views/checklist'
import Schedule from './views/schedule'
import Home from './views/home'


function App() {
  return (
    <div>
		<MyNav></MyNav>
		<Switch>
			<Route path="/schedule">
				<Schedule/>
			</Route>
			<Route path="/checklists">
				<Checklist/>
			</Route>
			<Route path="/goals">
				<Goals/>
			</Route>
			<Route path="/overview">
				<Overview />
			</Route>
			<Route path="/">
				<Home/>
			</Route>
		</Switch>
    </div>
  );
}

export default App;
