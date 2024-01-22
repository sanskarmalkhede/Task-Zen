import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTask = (index) => {
    // Implement task update logic as per your requirements
    // For simplicity, you can prompt the user for a new description or due date
    const updatedDescription = prompt("Enter updated description:");
    const updatedDueDate = prompt("Enter updated due date:");

    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      description: updatedDescription || updatedTasks[index].description,
      dueDate: updatedDueDate || updatedTasks[index].dueDate,
    };

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Page</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default TaskPage;
