import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function handleForm(formData) {
    console.log("form is working");
  }
  return (
    <>
      {/* Form to create a task */}
      <form action="handleForm">
        
        <label htmlFor="task">
          Task
          <input type="text" name="Task" id="task" />
        </label>
        <br />

        {/* Priority radio buttons to arrange tasks */}
        <label htmlFor="important">
          Important
          <input type="radio" name="task_priority" id="important" value='important'/>
        </label>
        <br />
        
        <label htmlFor="normal">
          Normal
          <input type="radio"
           name="task_priority" 
           id="normal" 
           value='important' />

        </label>
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
