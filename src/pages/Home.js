import React from 'react';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';

const Home = () => {
  const user = null; // Set the user object if authenticated

  return (
    <div>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
