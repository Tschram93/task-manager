import { useState } from 'react';
import * as TiIcons from 'react-icons/ti';
import './App.css';

function App() {
	// Want the tasks put into an array, which we are using useState for
	const [taskList, setTaskList] = useState([]);

	//Taking information from input field as a string, also as useState
	const [newTask, setNewTask] = useState('');

	const addTask = (event) => {
		const newTaskList = [...taskList, newTask]; // combining task array string from input;
		setTaskList(newTaskList); // Taking the new state value and updating them;
	};

	// Delete Task
	const deleteTask = (taskName) => {
		const newTodoList = taskList.filter( task => task === taskName ? false : true);
		
		setTaskList(newTodoList);
	}

	const handleChange = (event) => {
		setNewTask(event.target.value);
	};
	{
		/* created function to handle the input 
and add it as a string value */
	}

	return (
		<div className='App'>
			<h1>Task Manager</h1>
			<div className='addTask'>
				<input onChange={handleChange} />{' '}
				{/* Whenever typed within input we update the state of newTask */}
				<button onClick={addTask} id='taskButton'>
					Add Task
				</button>
			</div>
			<div className='list'>
				{/* using map to output each value in taskList as an h1 */}
				{taskList.map((task) => (
					<div>
						{/* div to group the h1 and button (delete) together */}
						<h1>{task}</h1>
						<button
						className='deleteButton'
						onClick={() => deleteTask(task)} >
							<TiIcons.TiDeleteOutline />
						</button>
						{/* Delete Button going to use react-icons. */}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
