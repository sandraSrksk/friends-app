import React from 'react';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';
import User from '../components/User'; // Import User component

const Home = () => {
  const user = null; // Set the user object if authenticated

  return (
    <div>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <Login />
      )}
      {/* Render the User component conditionally based on user authentication */}
      {user && <User user={user} />}
    </div>
  );
};

export default Home;
