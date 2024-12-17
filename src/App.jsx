import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(formData) {
    let task = formData.get("task");
    let priority = formData.get("choice");
    setTasks((prev) => [...prev, { work: task, priority: priority }]);
  }

  const taskList = tasks.map((task) => (
    <Task key={nanoid()} work={task.work} priority={task.priority} />
  ));
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
