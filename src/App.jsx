/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([]);
  function handleForm(FormData) {
    const taskInfo = FormData.get("task");
    setTasks((prev) => [...prev, taskInfo]);
  }
  let taskArray = tasks.map((task) => <p key={nanoid()}>{task}</p>);

  return (
    <>
      {/* Form to create a task */}
      <form action="handleForm">
        <label htmlFor="task">
          Task
          <input type="text" name="task" id="task" />
        </label>
        <br />

        {/* Priority radio buttons to arrange tasks */}
        <label htmlFor="important">
          Important
          <input
            type="radio"
            name="task_priority"
            id="important"
            value="important"
          />
        </label>

        <label htmlFor="normal">
          Normal
          <input
            type="radio"
            name="task_priority"
            id="normal"
            value="important"
          />
        </label>
        <button>Add</button>
      </form>
      <div>{taskArray}</div>
    </>
  );
}

export default App;
