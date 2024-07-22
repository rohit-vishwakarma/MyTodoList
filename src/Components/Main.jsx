import React, { useState } from "react";

import AddTask from "./AddTask";
import Task from "./Task";

const Main = () => {
  const allTodos = JSON.parse(localStorage.getItem("Todos")) || [];

  const [todos, setTodos] = useState(allTodos);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("Todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>My ToDo List</h1>
      <AddTask todos={todos} setTodos={setTodos} />
      {todos.map((todo) => (
        <Task
          key={todo.id}
          task={todo.value}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default Main;
