import Todo from "./Todo";
import TodoForm from './TodoForm';

function ToDoList(props) {
    return ( 
    <div className="todoapp stack-large">
      <h1>To Do List</h1>
      < TodoForm addTodo={props.addTodo} />
      <ul className="todo-list stack-large stack exception" aria-labelledby="list-heading">
        {props.todos.map((todo) => {
          return (
        < Todo todo={todo} key={todo.id} deleteTodo={props.deleteTodo} complete={props.complete} edit={props.editTodos} />
          )        
          })}
      </ul>
    </div>
    );
  }

export default ToDoList;