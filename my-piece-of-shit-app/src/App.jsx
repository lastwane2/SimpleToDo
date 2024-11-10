import { useState } from 'react'
import './App.css'
import { Task } from './Task'

function App() {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])

    const renderTask = (task, index) => {
        return (
            <div key={crypto.randomUUID()}>
                <Task
                    taskText={task.taskValue}
                    tasks={tasks}
                    setTasks={setTasks}
                    idx={index}
                    key={task.id}
                />
            </div>
        )
    }

    return (
        <>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={() => setTasks([...tasks, {id : crypto.randomUUID(), taskValue : inputValue}])}>Добавить задачу</button>
            <div>
                {tasks.map(renderTask)}
            </div>
        </>
    )
}

export default App
