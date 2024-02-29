import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details here as needed */}
    </div>
  );
};

export default User;