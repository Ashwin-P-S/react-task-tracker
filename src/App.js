import { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [task, setTask] = useState([ 
    {
    text: "Going to School",
    day: "Sep 1 at 9:00 Am",
    reminder: true,
    id: 1
  },
  {
    text: "Reopening the College",
    day: "Sep 1 at 3:00 Pm",
    reminder: true,
    id: 2
  },
  {
    text: "Meeting at School",
    day: "Feb 6th at 6:00 Pm",
    reminder: false,
    id: 3
  },
  {
    text: "Office Meeting",
    day: "Feb 25th at 6:00 Pm",
    reminder: false,
    id: 4
  }]);

  const addTask = (add_task) => {
    
     const id = Math.floor(Math.random()*1000);
     const newTask = {id, ...add_task};
     setTask([...task, newTask])
  }

  const deleteTask = (id) => {

    setTask(task.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {

    setTask(task.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
  }

  return (
    <Router>
      <div className="container">      
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
        <Route path='/' exact render={ (props) => (
          <>
          {showAddTask && <AddTask key={task.id} onAdd={addTask}/>}
          { task.length > 0? ( <Task task={task} onDelete={deleteTask} onToggle={toggleReminder }/> )
          : ( <p>No Task To Show</p> ) } 
          <Footer />
          </>
        ) } />
        <Route path='/about' component={About}/>    
        
      </div>
    </Router>
  );
}

export default App;
