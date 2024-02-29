import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // User signed in successfully
    } catch (error) {
      // Handle login errors
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Add login form or button */}
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;
