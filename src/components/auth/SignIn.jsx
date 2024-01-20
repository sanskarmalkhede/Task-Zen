import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./SignIn.css";
import AuthDetails from "./AuthDetails";
import SignUp from "./SignUp";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const signIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Handle successful sign-in
        console.error("success");
      })
      .catch((error) => {
        console.error("Error occured while SignIn", error);
      });
  };

  return (
    <div className="signin-container">
      <h2>Log in to your account</h2>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>

        <a href="/forgot-password">forgot password?</a>
      </form>
      <AuthDetails />
    </div>
  );
}

export default SignIn;
