import React, { useState } from "react";
import "./Tasks.css";
const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the taskTitle and newTask are not empty before adding them
    if (taskTitle.trim() && newTask.trim()) {
      const task = {
        title: taskTitle,
        description: newTask,
        dueDate: dueDate || null, // Use null if due date is not provided
        completed: false, // New tasks are initially marked as not completed
      };

      addTask(task);
      setTaskTitle("");
      setNewTask("");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={taskTitle} onChange={handleTitleChange} />
      </label>
      <label>
        Description:
        <input type="text" value={newTask} onChange={handleInputChange} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
