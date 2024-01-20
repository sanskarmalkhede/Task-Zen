import React from "react";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/auth/ForgotPassword";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
