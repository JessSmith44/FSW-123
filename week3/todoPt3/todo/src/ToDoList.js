import Todo from "./todo";

function ToDoList(prop) {
  // console.log(props.todos)
    return ( 
    <div className="todoapp stack-large">
      <h1>To Do List</h1>
      <ul className="todo-list stack-large stack exception" aria-labelledby="list-heading">
        {prop.todos.map((todo, index) => {
          console.log(todo)
          return (
            < Todo todo={todo} index={index} />
          )        
          })}
      </ul>
    </div>
    );
  }

export default ToDoList;
