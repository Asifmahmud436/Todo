import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(formData) {
    const task = formData.get("task");
    const priority = formData.get("choice");
    // setTasks((prev) => [...prev, taskInfo]);
    console.log(task);
    console.log(priority);
  }

  return (
    <>
      {/* Form to create a task */}
      <form action={addTask}>
        <label htmlFor="text">Task: </label>
        <input
          id="task"
          type="text"
          name="task"
          placeholder="Add a task for your day"
          defaultValue="Prayer"
        />
        <br />

        <label>
          <input type="radio" name="choice" value="important" /> Important
        </label>
        <label>
          <input type="radio" name="choice" value="later" /> Later
        </label>
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
