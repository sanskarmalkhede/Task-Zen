import React, { useState } from "react";
import "./Tasks.css";
const TaskList = ({ tasks, deleteTask, updateTask, setTasks }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </label>
      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{ opacity: task.completed ? 0.5 : 1 }}
          >
            <span>{task.description}</span>
            <span>{task.dueDate && ` - Due: ${task.dueDate}`}</span>
            <span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <button onClick={() => updateTask(index)}>Update</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
