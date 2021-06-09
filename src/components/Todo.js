import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { FaTrash } from "react-icons/fa"
import { getAllTask } from "../common/taskStorage"
import AllTask from './AllTask'
import ActiveTask from './ActiveTask'
import CompletedTask from './CompletedTask'

const Todo = () => {
    const { state, handleChange, handleSubmit, clearInput, sortTask, clearTask, flashMSG } = useGlobalContext();
    const textContent = (e) => e.target.textContent;
    useEffect(()=>{
        if(state.flash.type === 'success'){
            clearInput();
        }
       
    },[state.tab, state.flash.type])
    return (
        <main>
            <h1>#todo</h1>
            <section className="container">
                <div className="title">
                    <ul>
                        <li className={`${state.tab === 'all' ? 'active' : ''}`} onClick={(e) => sortTask(textContent(e), false)}>All</li>
                        <li className={`${state.tab === 'active' ? 'active' : ''}`} onClick={(e) => sortTask(textContent(e), false)}>Active</li>
                        <li className={`${state.tab === 'completed' ? 'active' : ''}`} onClick={(e) => sortTask(textContent(e), false)}>Completed</li>
                    </ul>
                </div>
                <div className="content">
                    <div className="form-container">
                       {
                           state.tab !== 'completed' && (
                            <form>
                            <div>
                                <input type="text" className={`${state.flash.type === 'error' ? 'error' : ''}`} value={state.item} onChange={(e) => handleChange(e)} placeholder="add details"/>
                            </div>
                                <button type="submit" onClick={(e) => handleSubmit(e)}> Add </button>
                            </form>
                           )
                       }
                    </div>
                    <div className="todo-list">
                      { 
                         (state.tab === 'all') && (<AllTask state={state}/>) ||
                         (state.tab === 'active') &&  (<ActiveTask state={state}/>) ||
                         (state.tab === 'completed') &&  (<CompletedTask state={state}/>)
                      }

                     {
                         state.todo.filter((t) => t.completed).length !== 0 && (
                            state.tab === 'completed' && (
                                <div className="trash" onClick={clearTask}>
                                <FaTrash className="trash-icon"/>
                                <span className="delete-all"> delete all</span>
                              </div>
                             )
                         )
                     }

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Todo
