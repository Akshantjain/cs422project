import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import MyNav from './components/mynav'

import Overview from './views/overview'
import Goals from './views/goals'
import Checklist from './views/checklist'
import Schedule from './views/schedule'
import Home from './views/home'
import EditDialog from './utils/EditDialog';
import DeleteAlert from './utils/DeleteAlert';

let reminders = [
	{ id: 1, title: 'Reminder 1', time: 'Time 1' },
	{ id: 2, title: 'Reminder 2', time: 'Time 2' },
]
let meetings = [
	{ id: 1, title: 'Meeting 1', time: 'Time 1' },
	{ id: 2, title: 'Meeting 2', time: 'Time 2' },
	{ id: 3, title: 'Meeting 3', time: 'Time 3' },
	{ id: 4, title: 'Meeting 4', time: 'Time 4' }
];
let checklists = [
	{
		id: 1,
		title: "Checklist 1",
		items: [
			{ id: 1, title: "Item 1" },
			{ id: 2, title: "Item 2" },
			{ id: 3, title: "Item 3" },
			{ id: 4, title: "Item 4" },
			{ id: 5, title: "Item 5" },
			{ id: 6, title: "Item 6" },
			{ id: 7, title: "Item 7" },
			{ id: 8, title: "Item 8" },
		],
	},
	{
		id: 2,
		title: "Checklist 2",
		items: [
			{ id: 1, title: "Item 1" },
			{ id: 2, title: "Item 2" },
			{ id: 3, title: "Item 3" },
			{ id: 4, title: "Item 4" },
			{ id: 5, title: "Item 5" },
			{ id: 6, title: "Item 6" },
			{ id: 7, title: "Item 7" },
			{ id: 8, title: "Item 8" },
		],
	},
	{
		id: 3,
		title: "Checklist 3",
		items: [
			{ id: 1, title: "Item 1" },
			{ id: 2, title: "Item 2" },
			{ id: 3, title: "Item 3" },
			{ id: 4, title: "Item 4" },
			{ id: 5, title: "Item 5" },
			{ id: 6, title: "Item 6" },
			{ id: 7, title: "Item 7" },
			{ id: 8, title: "Item 8" },
		],
	},
	{
		id: 4,
		title: "Checklist 4",
		items: [
			{ id: 1, title: "Item 1" },
			{ id: 2, title: "Item 2" },
			{ id: 3, title: "Item 3" },
			{ id: 4, title: "Item 4" },
			{ id: 5, title: "Item 5" },
			{ id: 6, title: "Item 6" },
			{ id: 7, title: "Item 7" },
			{ id: 8, title: "Item 8" },
		],
	},
];
let goals = [
	{
		id: 1,
		title: "Goal 1",
		type: "Weekly",
		current: 3,
		target: 12,
		change: 20,
	},
	{
		id: 2,
		title: "Goal 2",
		type: "Daily",
		current: 3,
		target: 12,
		change: 20,
	},
	{
		id: 3,
		title: "Goal 3",
		type: "Monthly",
		current: 3,
		target: 12,
		change: 20,
	},
	{
		id: 4,
		title: "Goal 4",
		type: "Yearly",
		current: 3,
		target: 12,
		change: 20,
	},
	{
		id: 5,
		title: "Goal 5",
		type: "Weekly",
		current: 3,
		target: 12,
		change: 20,
	},
];

function App() {

	const [EditOpen, setEditOpen] = React.useState(false);
	const [DeleteOpen, setDeleteOpen] = React.useState(false);

	const handleEdit = (key) => {
		console.log(key.currentTarget.getAttribute('id'))
		console.log(key.currentTarget.getAttribute('type'))
		setEditOpen(true)
	}

	const handleDelete = (key) => {
		console.log(key.currentTarget.getAttribute('id'))
		console.log(key.currentTarget.getAttribute('type'))
		setDeleteOpen(true)
	}

	const handleEditClose = () => {
		setEditOpen(false)
	}

	const handleDeleteClose = () => {
		setDeleteOpen(false)
	}

  return (
    <div>
		<MyNav></MyNav>
		<Switch>
			<Route path="/schedule">
				<Schedule 
					meetings={meetings} 
					reminders={reminders}
					handleEdit={handleEdit}
					handleDelete={handleDelete}

				/>
			</Route>
			<Route path="/checklists">
				<Checklist 
					checklists={checklists}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			</Route>
			<Route path="/goals">
				<Goals 
					goals={goals}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			</Route>
			<Route path="/overview">
				<Overview 
					meetings={meetings} 
					reminders={reminders}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			</Route>
			<Route path="/">
				<Home/>
			</Route>
		</Switch>
		<EditDialog open={EditOpen} handleClose={handleEditClose}/>
		<DeleteAlert open={DeleteOpen} handleClose={handleDeleteClose}/>
    </div>
  );
}

export default App;
