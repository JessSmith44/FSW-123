import React, { Component, useState } from "react";

function TodoForm({addTodo}){
  const initalInputs = {text: ""}
  const [inputs, setInputs] = useState(initalInputs)

  const handleChange = (e) => {
    var {value, name} = e.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    addTodo(inputs.text);

    // console.log(addTodo)
  }

  return(
    <form>
      <input type={"text"} name={"text"} onChange={handleChange} required="required"/>
      <button type="submit" onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default TodoForm;