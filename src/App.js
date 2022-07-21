import './App.css';

function App() {
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
