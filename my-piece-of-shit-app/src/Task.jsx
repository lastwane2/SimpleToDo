import {useState} from "react";

export const Task = (props) => {
    const [isTaskChanging, setIsTaskChanging] = useState(false)
    const [newInputValue, setNewInputValue] = useState(`${props.taskText}`)


    const renderTaskChanger = () => {
        return isTaskChanging ? (
            <input onChange={(e) => setNewInputValue(e.target.value)} value={newInputValue} />
        ) : (
            <label>{props.taskText}</label>
        )
    }

    const handleDelete = (tasks, setTasks, index) => {
        const tasksCopy = [...tasks]
        tasksCopy.splice(index, 1)
        setTasks(tasksCopy)
    }

    const handleChangeClick = () => {
        if (isTaskChanging) {
            const tasksCopy = props.tasks.map((task, index) => index === props.idx ? {...task, taskValue : newInputValue} : task)
            props.setTasks(tasksCopy)
            setIsTaskChanging(false)
        } else {
            setIsTaskChanging(true)
        }
    }

    return (
        <>
            {renderTaskChanger()}
            <button onClick={() => handleDelete(props.tasks, props.setTasks, props.idx)}>Удалить</button>
            <button onClick={() => (handleChangeClick())}>Изменить</button>

        </>
    )
}