import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ProfilePage = () => {
    const { userId } = useParams(); // If using React Router for dynamic routing
    const [userProfile, setUserProfile] = useState(null);
  
    useEffect(() => {
      // Fetch user profile data from Firestore based on userId
      const fetchUserProfile = async () => {
        try {
          const userProfileRef = firebase.firestore().collection('users').doc(userId);
          const userProfileData = await userProfileRef.get();
          if (userProfileData.exists) {
            setUserProfile(userProfileData.data());
          } else {
            console.log('User profile not found');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };
  
      fetchUserProfile();
    }, [userId]); // Fetch user profile data when userId changes
  
    return (
      <div>
        <h1>User Profile</h1>
        {userProfile ? (
          <div>
            <h2>{userProfile.displayName}'s Profile</h2>
            <p>Email: {userProfile.email}</p>
            <p>Hobbies: {userProfile.hobbies}</p>
            {/* Add more profile information here */}
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    );
  };
  
  export default ProfilePage;