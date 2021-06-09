import React, { useContext, useEffect, useReducer } from "react"
import reducer from "./reducer/reducer"
import { store } from "./store"

const AppContext = React.createContext()
const STORAGE_KEY = 'todo'

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, store)

    useEffect(()=>{
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }, [state])

    const handleChange = (e) => {
        dispatch({type: 'INPUT_CHANGE', payload: e.target.value})
    }
    const handleSubmit = (e) => {
       dispatch({type: 'ADD_ITEM', payload: e})
    }

    const handleRemoveItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
     }

     const clearInput = () => {
        dispatch({type: 'CLEAR_INPUT'})
     }
     const TaskCompleted = (id) => {
        dispatch({type: 'TASK_COMPLETED', payload: id})
     }
     const sortTask = (tab, order) => {
         dispatch({type: 'SORT_TASK', payload: {tab, order}})
     }
     const clearTask = () => {
        dispatch({type: 'CLEAR_TASK'})
    }   
    const flashMSG = () => {
        dispatch({type: 'FLASH_MSG'})
    }
    
    

    return (
        <AppContext.Provider 
        value={{
            handleSubmit,
            handleRemoveItem,
            handleChange,
            clearInput,
            TaskCompleted,
            sortTask,
            clearTask,
            flashMSG,
            state
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }

