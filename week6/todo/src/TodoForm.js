import React, { useState } from "react";

function TodoForm({addTodo}){
  const initalInputs = {text: ""}
  const [inputs, setInputs] = useState(initalInputs);
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    var {value, name} = e.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs)
    if(inputs.text === ''){
      let msg = 'Oh no! To do is empty!';
      setErrorMessage(msg)
      return;
    } else {
      addTodo(inputs.text);
      setInputs(initalInputs);
    }
    // console.log(addTodos)
  }

  return(
    <form>
      <input 
      type={"text"} 
      name={"text"} 
      value={inputs.text} 
      onChange={handleChange} 
      required="required"/> {errorMessage}
      <button type="submit" className="addbtn" onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default TodoForm;