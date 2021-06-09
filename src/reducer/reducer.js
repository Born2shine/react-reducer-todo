import { getAllTask, addTask } from "../common/taskStorage"

const reducer = (state, action) => {
    if(action.type === 'INPUT_CHANGE'){
       return {...state, item: action.payload, flash: {...state.flash, type: ''}}
    }
    if(action.type === 'ADD_ITEM'){
       action.payload.preventDefault()
        // console.log(state)
        if(state.item){
            const newItem = {id: new Date().getTime().toString(), name: state.item, completed: false}
            return {...state, todo: [...state.todo, newItem], flash: {type: 'success', msg: 'Item submitted successfully'}}
        }
       return {...state, flash: {type: 'error', msg: 'Task can not be empty'}}
    }
    if(action.type === 'REMOVE_ITEM'){
        return {...state, todo: state.todo.filter((t) => t.id !== action.payload)}
    }
    if(action.type === 'CLEAR_INPUT'){
        return {...state, item: ''}
    }
    if(action.type === 'TASK_COMPLETED'){
        return {...state, todo: state.todo.map((item, i) => {
            if(item.id === action.payload){
                return {...item, completed: !item.completed}
            }
            return item;
        })}
    }
    if(action.type === 'SORT_TASK'){
        return {...state,  tab: action.payload.tab.toLowerCase()}
    }
    if(action.type === 'CLEAR_TASK'){
        return {...state,  todo: state.todo.filter((item) => !item.completed), tab: 'all'}
    }
    
    return state
}

export default reducer
