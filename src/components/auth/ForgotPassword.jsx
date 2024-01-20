// ForgotPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';
import './SignIn.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className='signin-container'>
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
