import React from 'react'
import { FaTrash } from "react-icons/fa"
import { useGlobalContext } from '../context'

const Task = ({item, tab}) => {
    const { handleRemoveItem, TaskCompleted } = useGlobalContext()
    return (
        <div className="single-task">
        <div className={`${item.completed ? 'task strike' : 'task'}`}>
            <input type="checkbox" checked={item.completed} onChange={() => TaskCompleted(item.id)}/> 
            <label htmlFor="task">{item.name}</label>
        </div>
        {tab === 'completed' && (<div className="action" onClick={() => handleRemoveItem(item.id)}><FaTrash/></div>)}
   </div>
    )
}

export default Task
