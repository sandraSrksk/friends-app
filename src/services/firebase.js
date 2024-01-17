import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// components/Login.js
import React from 'react';
import { auth } from '../services/firebase';

const Login = () => {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Login;
