import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [task, setTask] = useState([ ]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setTask(taskFromServer);
    }
    getTask()
  }, [])

  const fetchTask = async() => {
    const res = await fetch('http://localhost:8000/task');
    const data = await res.json();

    return data;
  } 

  const fetch_Task = async(id) => {
    const res = await fetch(`http://localhost:8000/task/${id}`);
    const data = await res.json();

    return data;
  }

  const addTask = async (add_task) => {
    
    const res= await fetch('http://localhost:8000/task',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(add_task)
    })

    const data = await res.json();

    setTask([...task, data]);

    // const id = Math.floor(Math.random()*1000);
    // const newTask = {id, ...add_task};
    // setTask([...task, newTask])
  }

  const deleteTask = async (id) => {

    await fetch( `http://localhost:8000/task/${id}`, {
      method: 'DELETE',
    })
    setTask(task.filter((task) => task.id !== id));
  }

  const toggleReminder = async(id) => {

    const taskToToggle = await fetch_Task(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch( `http://localhost:8000/task/${id}`, {
      method: 'PUT',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });

    const data = await res.json()

    setTask(task.map((task) => task.id === id ? {...task, reminder: data.reminder}: task))
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
