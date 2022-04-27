import { useState } from 'react';
import TodoForm from './TodoForm';

function Todo({todo, deleteTodo, complete, edit, addTodo}){

    const initalInputs = {text: ""}
    const [inputs, setInputs] = useState(initalInputs);
    const [errorMessage, setErrorMessage] = useState('');
    const [editToggle, setEditToggle] = useState(true);
    

    const handleChange = (e) => {
        var {value, name} = e.target
    
        setInputs({
          ...inputs,
          [name]: value
        })
      }
      const handleSubmit = (update) => {
        edit(update, todo.id)
        setEditToggle(prevToggle => !prevToggle)
        // console.log(addTodos)
      }


    return(
        <li className="todo stack-small">
            
            { !editToggle ? 
            <>
            <TodoForm addTodo={ handleSubmit }/>
            <button className='close-btn'
              onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
            :
            <>
        <div className="checkItem">
          
          <input id={"todo-" + todo.id} className="checkbox" type="checkbox" checked = { todo.isComplete } onChange={() => complete(todo.id)} />
          
          <span style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
          
          <label className="todo-label" htmlFor={"todo-" + todo.id}> {todo.text} </label> </span>
          
          <button className="deletebtn" onClick={() => deleteTodo(todo.id)}>X</button>

          <button className="editbtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}> Edit </button>
        
        </div>
            </>
        }

      </li>
    )
  }
  
  export default Todo;