import { useState } from 'react';
import { todos as data } from './STORE';
import ToDoList from'./ToDoList';
import './App.css';
import { v4 as uuid } from 'uuid';

function App(){
  
const [todos, setToDo] = useState(data); 

  const addTodo = text =>{
    // console.log(text)
    var newTodo = {text: text, id: uuid(), isComplete: false}
    const updatedTodos = [...todos, newTodo];
    // console.log(newTodo)
    // console.log(updatedTodos)
    setToDo(updatedTodos);
  }

  const completeTodo = id => {
    const tempTodo = [...todos];
    const index = tempTodo.findIndex(todos => todos.id === id);
    // console.log(index)
    tempTodo[index].isComplete = !tempTodo[index].isComplete;
    setToDo(tempTodo);
  }

  const deleteTodo = id => {
    const tempTodo = [...todos];
    const newTodos = tempTodo.filter((todos) => todos.id !== id);
    // console.log(newTodos)
    setToDo(newTodos);
  }

  return(
    <div>
      < ToDoList todos={todos} key={todos.id} deleteTodo={deleteTodo} addTodo={addTodo} complete={completeTodo}/>
    </div>
  )
}

export default App;