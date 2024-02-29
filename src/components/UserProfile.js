// src/components/UserProfile.js
import React from 'react';
import styled from 'styled-components';

// Define the styled component
const UserProfileWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const UserProfile = ({ user }) => {
  return (
    <UserProfileWrapper>
      <h2>{user.username}'s Profile</h2>
      {/* Display user information */}
    </UserProfileWrapper>
  );
};

export default UserProfile;

