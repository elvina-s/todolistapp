import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import uuid from "react-uuid";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (inputValue) => {
    if(inputValue) {
      const newTodo = {
        id: uuid(),
        task: inputValue,
        complete: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTodo = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
  }

  return (
    <div className="App">
      <h1>To do list: {todos.length}</h1>
      <ToDoForm 
      addTodo={addTodo}
      />
      {todos.map((todo) => (
          <ToDoList
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          />
        )
      )}
    </div>
  );
}

export default App;