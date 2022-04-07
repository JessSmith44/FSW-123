import { useState } from 'react';
import { todos } from './STORE';
import ToDoList from'./ToDoList';
import './App.css';

function App(){
  const [todo, setToDo] = useState(todos);

  const completeTodo = id => {
    const tempTodo = [...todo];
    const index = tempTodo.findIndex(todos => todos.id === id);
    tempTodo[index].completedTodo = !tempTodo[index].completedTodo;
    setToDo(tempTodo);
  }
  const deleteTodo = (id) => {
    const tempTodo = [...todo];
    const newTodos = tempTodo.filter((todos) => todos.id !== id);
    setToDo(newTodos);
  }
  return(
    <div>
    < ToDoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo} />
    </div>
  )
}

export default App;