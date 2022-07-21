import { useState } from 'react';
import './App.css';

function App() {
  // Want the tasks put into an array, which we are using useState for 
  const [taskList, setTaskList] = useState([]);

  //Taking information from input field as a string, also as useState
  const [newTask, setNewTask] = useState('');

  const addTask = (event) => {
    const newTaskList = [...taskList, newTask] // combining task array string from input;
    setTaskList(setNewTask); // Taking the new state values and updating them;
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }; 
  {/* created function to handle the input 
and add it as a string value */}
  
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className='addTask'>
        <input onChange={handleChange} /> {/* Whenever typed within input we update the state of newTask */}
        <button onClick={addTask} id='taskButton'>Add Task</button>
      </div>
      <div className='list'></div>
    </div>
  );
}

export default App;
