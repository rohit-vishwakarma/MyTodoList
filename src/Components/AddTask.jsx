import React, { useState } from "react";

const AddTask = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const addTaskToTodos = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      alert("Error - Adding empty task");
      return;
    }

    const newTask = {
      id: Date.now(),
      value: trimmedTask,
    };

    const todoList = [newTask, ...todos];
    localStorage.setItem("Todos", JSON.stringify(todoList));
    setTodos(todoList);
    setTask("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTaskToTodos();
    }
  };

  const handleClick = () => {
    addTaskToTodos();
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ width: "400px", padding: "10px" }}
        placeholder="Type a task and press Enter to add"
      />
      <button
        onClick={handleClick}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
