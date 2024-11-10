import { useState } from 'react'
import './App.css'
import { Task } from './Task'

function App() {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])

    const renderTask = (task, index) => {
        return (
            <div>
                <Task
                    taskText={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    idx={index}
                />
            </div>
        )
    }

    return (
        <>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={() => setTasks([...tasks, inputValue])}>Добавить задачу</button>
            <div>
                {tasks.map((task, index) => renderTask(task, index))}
            </div>
        </>
    )
}

export default App
