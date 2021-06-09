import React from 'react'
import Task from './Task'

const ActiveTask = ({state}) => {
    return (
        state.todo ?
        state.todo.filter((task) => !task.completed).map((item) => {
          return (
              <div key={item.id}>
                 <Task item={item} tab={state.tab}/>
              </div>
          )
      }) : (<div className="empty-task"> No Task Available </div>)
    )
}

export default ActiveTask
