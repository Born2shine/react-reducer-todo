import React from 'react'
import Task from './Task'

const CompletedTask = ({state}) => {
    return (
        state.todo ?
        state.todo.filter((task) => task.completed === true).map((item) => {
          return (
              <div key={item.id}>
                 <Task item={item} tab={state.tab}/>
              </div>
          )
      }) : (<div className="empty-task"> No Task Available </div>)
    )
}

export default CompletedTask
