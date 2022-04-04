function Todo({todo, index}){
    return(
        <li className="todo stack-small">
        <div className="checkItem">
          <input id={"todo-" + index} type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor={"todo-" + index}> {todo.text} </label>
        </div>
      </li>
    )
  }
  
  export default Todo;