import React from 'react'
import Event from './Event';

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <>
          {task.map((task) => (
            <Event key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}  
        </>
    )
}

export default Task
