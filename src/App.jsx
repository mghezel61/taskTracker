import React, { useState, useEffect } from "react";

import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TasksList from "./components/TasksList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App(props) {
  // toggle add filed
  const [showAddTask, setShowAddTask] = useState(true);
  // fetch data from DB
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks from database
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const fetchedTasks = await res.json();
    return fetchedTasks;
  };

  // Fetch a task from database
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const fetchedTasks = await res.json();
    return fetchedTasks;
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    let task = await fetchTask(id);
    const updatedTask = { ...task, reminder: !task.reminder };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Add new Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json(res);
    setTasks([...tasks, data]);
    // const tasksFromServer = res.json();
    // setTasks(...tasksFromServer, ...task);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, task]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle the Add Component
  const toggleAddComponen = (e) => {
    setShowAddTask(!showAddTask);
  };
  return (
    <Router>
      <div className="container">
        <Header onClick={toggleAddComponen} showAdd={showAddTask} />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddTask && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? (
                <TasksList
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "There is no task to show"
              )}
            </>
          )}
        />

        <Route path="/about" component={AboutUs} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
