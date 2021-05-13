import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Doctor Appointment",
      day: "5th Feb at 8:40",
      reminder: false,
    },
    {
      id: 2,
      title: "finishing the react task",
      day: "3th Jan at 23:40",
      reminder: true,
    },
    {
      id: 3,
      title: "Shopping",
      day: "10th Feb at 7:30",
      reminder: true,
    },
    {
      id: 4,
      title: "Meeting",
      day: "23th Feb at 14:30",
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id)=> {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task)
    );
    tasks.map((task)=>task.id === id ? console.log(task.reminder): "");
  } 

  // Add new Task
  const addTask = (e)=> {
    // e.preventDefault;
    console.log(e);
  }
  return (
    <div className="container">
      <Header />
      <AddTask addTask = {addTask} />
      {tasks.length > 0 ? (
        <TasksList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There is no task to show"
      )}
    </div>
  );
}

export default App;
