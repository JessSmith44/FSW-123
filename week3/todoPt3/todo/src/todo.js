function Todo({todo, index, completeTodo, deleteTodo}){
    return(
        <li className="todo stack-small">
        <div className="checkItem">
          <input 
          id={"todo-" + index} 
          type="checkbox" 
          checked = { todo.completeTodo }
          onChange={() => completeTodo(todo.id)} 
          />
          <label className="todo-label" htmlFor={"todo-" + index}> {todo.text} </label>
        </div>
      </li>
    )
  }
  
  export default Todo;