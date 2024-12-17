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
    setTasks((prev) => [...prev, { work: task, priority: priority }]);
    console.log("tasks: ", tasks);
  }

  const taskList = tasks.map((task) => {
    <div>
      <p>{task.work}</p>
      <p>{task.priority}</p>
    </div>;
  });
  console.log("tasklist: ", taskList);
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
      <div>{taskList}</div>
    </>
  );
}

export default App;
