import { todos } from './STORE';
import ToDoList from'./ToDoList';
import './App.css';

function App(){
  return(
    <div>
    < ToDoList todos = {todos} />
    </div>
  )
}

export default App;