import { useState,useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [date,setDate] = useState(new Date())
  const [searchedTask,setSearchedTask] = useState([])
  
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(intervalId);
  },[])
  
  
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
    setSearchedTask((prev) => prev.filter((item) => item.id != id));
  }

  function markComplete(id) {
    setTasks((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
    setSearchedTask((prev) =>
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
    <Task
      key={task.id}
      work={task.work}
      priority={task.priority}
      isComplete={task.isComplete}
      delete={() => deleteTask(task.id)}
      finished={() => markComplete(task.id)}
    />
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
      {/* header section */}
      <div className="header">
        <div>
          <h1>Hello, Soldier! </h1>
          <h3>Manage your daily Tasks</h3>
        </div>
        <h4 className="clock">
            {date.toLocaleTimeString()}
        </h4>
      </div>

      {/* task form */}
      <form action={addTask}>
        <textarea name="task" id="task" rows='5' cols='54' placeholder="Praying Salah"></textarea>
        <br />
        <input type="radio" name="choice" value="important" required/>
        <label className="radio-btn">
           Important
        </label >
        <input type="radio" name="choice" value="later" />
        <label className="radio-btn" htmlFor="later" id="later">Later</label>
        <button>Add</button>
      </form>
      
      {/* search section */}
      <div className="search-container">
        <input
          type='text'
          name='searchBar'
          onChange={handleSearch}
          placeholder="Search your tasks..."
        />
        <button onClick={sortTask}>Sort by Importance</button>
        <br />
        {searchedTaskList.length > 0 && <button onClick={clearSearch}>Clear Search</button>}
      </div>
      
      {/* display the search items  */}
      {searchedTaskList.length > 0 ?
        <div className="task-container">{searchedTaskList}</div> :
        <div className="task-container">{taskList}</div> 
      }
    </>
  );
}

export default App;
