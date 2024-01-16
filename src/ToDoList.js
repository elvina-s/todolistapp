function ToDo({todo, deleteTodo, toggleTodo}) {
    return(
        <div className="item-todo" key={todo.id}>
            <div 
            className={`item-text ${todo.complete ? "strike" : ""}`}
            onClick={() => toggleTodo(todo.id)}
            >
                <p>{todo.task}</p>
            </div>
            <div className="item-delete" onClick={() => deleteTodo(todo.id)}>
                x
            </div>
        </div>
    )
}

export default ToDo