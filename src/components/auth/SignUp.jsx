import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./SignIn.css"; // Assuming you have a CSS file named SignIn.css in the same directory

function SignUp() {
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
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Handle successful sign-in
        console.error("Arre bc");
      })
      .catch((error) => {
        console.error("Error aaya ji, error", error);
      });
  };

  return (
    <div className="signin-container">
      <h2>Create Account</h2>
      <form onSubmit={SignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
