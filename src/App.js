import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [task, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
  ]);

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
    
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask key={task.id} onAdd={addTask}/>}
      { task.length > 0? <Task task={task} onDelete={deleteTask} onToggle={toggleReminder}/> : <p>No Task To Show</p> }

    </div>
  );
}

export default App;
