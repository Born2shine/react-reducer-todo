import React from 'react'
import Task from './Task'

const AllTask = ({state}) => {
    return (
        state.todo ?
        state.todo.map((item) => {
          return (
              <div key={item.id}>
                 <Task item={item} tab={state.tab}/>
              </div>
          )
      }) : (<div className="empty-task"> No Task Available </div>)
    )
}

export default AllTask
