import React from "react";

const Task = ({ task, handleDelete }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
      gap: "10px",
    }}
  >
    <h3>{task}</h3>
    <button onClick={handleDelete}>Delete</button>
  </div>
);

export default Task;
