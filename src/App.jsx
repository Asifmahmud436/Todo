import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchedTask,setSearchedTask] = useState([])

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
    setSearchedTask([])
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

  const searchedTaskList = searchedTask.map((task) => (
    <div key={nanoid()}>
      <p>{task.work}</p>
      <p>{task.priority}</p>
    </div>
  ));
  

  function handleSearch(event){
    const {value} = event.currentTarget;
    const inputSearch = tasks.filter((task) => task.work.toLowerCase().includes(value.toLowerCase()))
    setSearchedTask(inputSearch)
  }

  function clearSearch(){
    setSearchedTask([])
  }

  
  return (
    <>
      <div className="header">
        <h1>Hello, Soldier! </h1>
        <h3>Manage your daily Tasks</h3>
      </div>
      <form action={addTask}>
        <label htmlFor="text"> </label>
        {/* <input
          id="task"
          type="text"
          name="task"
          placeholder="Add a task for your day"
          defaultValue="Game"
        /> */}
        <textarea name="task" id="task" defaultValue='Game' rows='5' cols='54'></textarea>
        <br />
        
        <input type="radio" name="choice" value="important" />
        <label className="radio-btn">
           Important
        </label >
        <input type="radio" name="choice" value="later" />
        <label className="radio-btn" htmlFor="later" id="later">Later</label>
        
        
        <br />
        <button>Add</button>
      </form>
      
      <label>
        Search: 
        <input
          type='text'
          name='searchBar'
          onChange={handleSearch}
        />
      </label>
      <br/>
      <button onClick={sortTask}>Sort by importance</button>
      {searchedTaskList.length > 0 && <button onClick={clearSearch}>Clear Search</button>}
      
      {searchedTaskList.length > 0 ?
        <div className="task-container">{searchedTaskList}</div> :
        <div className="task-container">{taskList}</div> 
      }
    </>
  );
}

export default App;
