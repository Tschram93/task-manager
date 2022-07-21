import { useState } from 'react';
import './App.css';

function App() {
  // Want the tasks put into an array, which we are using useState for 
  const [taskList, setTaskList] = useState([]);

  //Taking information from input field as a string, also as useState
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className='addTask'>
        <input onChange={handleChange} /> {/* Whenever typed within input we update the state of newTask */}
        <button id='taskButton'>Add Task</button>
      </div>
      <div className='list'></div>
    </div>
  );
}

export default App;
