import { useState } from 'react';
import './App.css';

function App() {
  // Want the tasks put into an array, which we are using useState for 
  const [taskList, setTaskList] = useState([]);

  //Taking information from input field as a string, also as useState
  const [newTask, setNewTask] = useState('');

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className='addTask'>
        <input />
        <button id='taskButton'>Add Task</button>
      </div>
      <div className='list'></div>
    </div>
  );
}

export default App;
