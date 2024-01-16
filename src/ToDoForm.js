import { useState } from "react";

function ToDoForm({addTodo}) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(inputValue)
        setInputValue("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter a task.."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            />
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;