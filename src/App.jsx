import React from "react";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/auth/ForgotPassword";
import Sidebar from "./components/Sidebar";
import TaskPage from "./components/TaskPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Sidebar />} />
          <Route path="/tasks" element={<TaskPage />} />         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
