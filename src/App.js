import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Overview from './views/overview'
import Goals from './views/goals'
import Checklist from './views/checklist'
import Schedule from './views/schedule'
import Home from './views/home'
import EditDialog from './utils/EditDialog';
import DeleteAlert from './utils/DeleteAlert';
import EditForm from './components/EditForm';
import { Snackbar } from '@material-ui/core';

let reminders = [
	{ id: 1, repeat: 'Daily', title: 'Reminder 1', date: 'Date', time: 'Time 1', description: '' },
	{ id: 2, repeat: 'Weekly', title: 'Reminder 2', date: 'Date', time: 'Time 2', description: ''  },
]
let meetings = [
	{ id: 1, repeat: 'None', title: 'Meeting 1', date: 'Date', time: 'Time 1', description: ''  },
	{ id: 2, repeat: 'Weekly', title: 'Meeting 2', date: 'Date', time: 'Time 2', description: ''  },
	{ id: 3, repeat: 'None', title: 'Meeting 3', date: 'Date', time: 'Time 3', description: ''  },
	{ id: 4, repeat: 'Monthly', title: 'Meeting 4', date: 'Date', time: 'Time 4', description: ''  }
];
let checklists = [
	{
		id: 1,
		title: "Checklist 1",
		noOfItems: 8,
		items: [
			{ id: 1, title: "Item 1", status: true },
			{ id: 2, title: "Item 2", status: false },
			{ id: 3, title: "Item 3", status: true },
			{ id: 4, title: "Item 4", status: true },
			{ id: 5, title: "Item 5", status: false },
			{ id: 6, title: "Item 6", status: false },
			{ id: 7, title: "Item 7", status: true },
			{ id: 8, title: "Item 8", status: false },
		], description: '' 
	},
	{
		id: 2,
		title: "Checklist 2",
		noOfItems: 8,
		items: [
			{ id: 1, title: "Item 1", status: true },
			{ id: 2, title: "Item 2", status: false },
			{ id: 3, title: "Item 3", status: true },
			{ id: 4, title: "Item 4", status: true },
			{ id: 5, title: "Item 5", status: false },
			{ id: 6, title: "Item 6", status: false },
			{ id: 7, title: "Item 7", status: true },
			{ id: 8, title: "Item 8", status: false },
		], description: '' 
	},
	{
		id: 3,
		title: "Checklist 3",
		noOfItems: 8,
		items: [
			{ id: 1, title: "Item 1", status: true },
			{ id: 2, title: "Item 2", status: false },
			{ id: 3, title: "Item 3", status: true },
			{ id: 4, title: "Item 4", status: true },
			{ id: 5, title: "Item 5", status: false },
			{ id: 6, title: "Item 6", status: false },
			{ id: 7, title: "Item 7", status: true },
			{ id: 8, title: "Item 8", status: false },
		], description: '' 
	},
	{
		id: 4,
		title: "Checklist 4",
		noOfItems: 8,
		items: [
			{ id: 1, title: "Item 1", status: true },
			{ id: 2, title: "Item 2", status: false },
			{ id: 3, title: "Item 3", status: true },
			{ id: 4, title: "Item 4", status: true },
			{ id: 5, title: "Item 5", status: false },
			{ id: 6, title: "Item 6", status: false },
			{ id: 7, title: "Item 7", status: true },
			{ id: 8, title: "Item 8", status: false },
		], description: '' 
	},
];
let goals = [
	{
		id: 1,
		title: "Goal 1",
		repeat: "Weekly",
		current: 3,
		target: 12,
		change: 3,
		description: '' 
	},
	{
		id: 2,
		title: "Goal 2",
		repeat: "Daily",
		current: 3,
		target: 12,
		change: 3,
		description: '' 
	},
	{
		id: 3,
		title: "Goal 3",
		repeat: "Monthly",
		current: 3,
		target: 12,
		change: 3,
		description: '' 
	},
	{
		id: 4,
		title: "Goal 4",
		repeat: "Yearly",
		current: 3,
		target: 12,
		change: 3,
		description: '' 
	},
	{
		id: 5,
		title: "Goal 5",
		repeat: "Weekly",
		current: 3,
		target: 12,
		change: 3,
		description: '' 
	},
];

let goalsPercent = 66;

const importData = {
}

function App() {



	const [option, setOption] = React.useState('checklist');
	const [id, setId] = React.useState(2);

	const [object, setObject] = React.useState({});
	const [index, setIndex] = React.useState(1);

	const [EditOpen, setEditOpen] = React.useState(false);
	const [DeleteOpen, setDeleteOpen] = React.useState(false);

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const getObjectandIndex = () => {
		// console.log("here")
		if (option === 'meeting') {
			let thisIndex = -1;
			for (let meeting of meetings) {
				thisIndex = thisIndex + 1;
				if (parseInt(meeting.id) === parseInt(id)) {
					setIndex(thisIndex)
					return meeting;
				}
			}
		}
		else if (option === 'reminder') {
			let thisIndex = -1;
			for (let reminder of reminders) {
				thisIndex = thisIndex + 1;
				if (parseInt(reminder.id) === parseInt(id)) {
					setIndex(thisIndex)
					return reminder;
				}
			}
		}
		else if (option === 'goal') {
			let thisIndex = -1;
			for (let goal of goals) {
				thisIndex = thisIndex + 1;
				if (parseInt(goal.id) === parseInt(id)) {
					setIndex(thisIndex)
					return goal;
				}
			}
		}
		else if (option === 'checklist') {
			let thisIndex = -1;
			for (let checklist of checklists) {
				thisIndex = thisIndex + 1;
				if (parseInt(checklist.id) === parseInt(id)) {
					setIndex(thisIndex)
					return checklist;
				}
			}
		}
	} 

	// const handleEdit = (key) => {

	// 	if (key.currentTarget.getAttribute('type') === "checklist") {
	// 		handleClick();
	// 	}
	// 	else {
	// 		setOption(key.currentTarget.getAttribute('type'));
	// 		setId(key.currentTarget.getAttribute('id'));
	// 		setObject(getObjectandIndex());
	// 		setEditOpen(true)
	// 	}
	// }


	const handleEdit = (key) => {
		if (key.currentTarget.getAttribute('type') === "checklist") {
			handleClick();
		}
		else {
			temp(key, function temp2() {
				setObject(getObjectandIndex());
				setEditOpen(true)
				console.log("here")
			});

		}
	}
	const temp = (key) => {
		setOption(key.currentTarget.getAttribute('type'));
		setId(key.currentTarget.getAttribute('id'));
	}

	const handleDelete = (key) => {
		// console.log(key.currentTarget.getAttribute('id'))
		// console.log(key.currentTarget.getAttribute('type'))
		setOption(key.currentTarget.getAttribute('type'));
		setId(key.currentTarget.getAttribute('id'));
		setDeleteOpen(true)
		setObject(getObjectandIndex());
	}

	const handleEditClose = () => {
		setEditOpen(false)
	}

	const handleDeleteClose = () => {
		setDeleteOpen(false)
	}
	
	const updateData = () => {
		let success = false;

		if (success)	{
			console.log("updated")
			handleEditClose();
		}
	}

	const deleteData = () => {
		let success = false;

		if (success)	{
			console.log("deleted")
			handleDeleteClose();
		}
	}

	const handleIncrease = (value1, value2) => {
		for (let goal of goals) {
			if (goal.id === value2) {
				goal.current = value1;
			}
		}
		console.log(goals)
	}

	const handleDecrease = (value1, value2) => {
	}	

  return (
    <div>
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
					handleIncrease={handleIncrease}
					handleDecrease={handleDecrease}
				/>
			</Route>
			<Route path="/overview">
				<Overview 
					goals={goals}
					checklists={checklists}
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

		<EditDialog 
			open={EditOpen} 
			handleClose={handleEditClose} 
			handleSave={updateData} 
		>
			<EditForm type={option} object={object}/>
		</EditDialog>
			

		<DeleteAlert
			id={id}
			type={option}
			open={DeleteOpen}
			handleClose={handleDeleteClose} 
			handleDelete={deleteData}
		/>
		  <Snackbar
			  open={open}
			  message="Edit options are not implemeted yet for the checklists due to complex problems"
			  autoHideDuration={6000}
			  onClose={handleClose}
		  />
    </div>
  );
}

export default App;
