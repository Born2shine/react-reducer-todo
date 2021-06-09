const STORAGE_KEY = 'todo'

export const getAllTask = () => {
    try {
        const todoList = localStorage.getItem(STORAGE_KEY)
        if(!todoList){
            return []
        }
        return JSON.parse(todoList)
    } catch (error) {
        return []
    }
}

export const addTask = (task) => {
    const tasks = getAllTask();
    tasks.push(task)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}