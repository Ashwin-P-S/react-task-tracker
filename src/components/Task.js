import React from 'react'
import Event from './Event';

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <>
          {task.map((task, index) => (
            <Event key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>))}  
        </>
    )
}

export default Task
