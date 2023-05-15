//import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import Footer from './components/Footer'

import About from './components/About'



function App() {
  const [showAdd,setShowAdd] = useState(false);
  
  const [tasks, setTasks] = useState([]);
  const toggleReminder = (id) => {
    setTasks(tasks.map(task=> task.id ===id? {...task, reminder:!task.reminder} : task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !==id ))
  }
  return (
    <div className="Main">
      <Header showAdd = {showAdd} onAdd={() =>setShowAdd(!showAdd)}/>
      {showAdd && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
      ? (<Tasks tasks = {tasks} onToggle ={toggleReminder} 
      onDelete = {deleteTask}/>) 
      : 'No Posts'}
      
    </div>
  );
}

export default App;
