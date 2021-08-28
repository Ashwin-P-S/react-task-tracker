import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Event = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`event ${task.reminder ? 'reminder': ''}`} onDoubleClick={ () => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'black', cursor: 'pointer' }} onClick={ () => onDelete(task.id) }/></h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Event
