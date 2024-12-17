import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(formData) {
    let task = formData.get("task");
    let priority = formData.get("choice");
    let newTask = {
      id: nanoid(),
      work: task,
      priority: priority,
      isComplete: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((item) => item.id != id));
  }

  function markComplete(id) {
    setTasks((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }

  const sortTask =() => {
    const newTask = [...tasks].sort((a,b) => a.priority.localeCompare(b.priority))
    setTasks(newTask)
  }

  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      work={task.work}
      priority={task.priority}
      isComplete={task.isComplete}
      delete={() => deleteTask(task.id)}
      finished={() => markComplete(task.id)}
    />
  ));

  return (
    <>
      
      <form action={addTask}>
        <label htmlFor="text">Task: </label>
        <input
          id="task"
          type="text"
          name="task"
          placeholder="Add a task for your day"
          defaultValue="Game"
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
      <button onClick={sortTask}>Sort</button>
      <div className="task-container">{taskList}</div>
    </>
  );
}

export default App;
