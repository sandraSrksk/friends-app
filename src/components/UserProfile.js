import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile"> {/* Apply the styling class */}
      <h2>{user.username}'s Profile</h2>
      {/* Display user information */}
    </div>
  );
};

export default UserProfile;
