import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login'; 
import User from './components/User';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" element={<Login />} /> {/* Add route for Login page */}
        <Route path="/User" element={<User />} /> {/* Add route for Profile page */}
      
      </Routes>
    </Router>
  );
};

export default App;
