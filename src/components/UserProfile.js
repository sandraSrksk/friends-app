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

// // src/components/UserProfile.js
// import React from 'react';
// import styled from 'styled-components';
// //import { auth, firestore }// from '../services/firebase';

// // Define the styled component
// const UserProfileWrapper = styled.div`
//   background-color: #f0f0f0;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const UserProfile = ({ user }) => {
//   return (
//     <UserProfileWrapper>
//       <h2>{user.username}'s Profile</h2>
//       {/* Display user information */}
//     </UserProfileWrapper>
//   );
// };

// const ProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       if (auth.currentUser) {
//         const userRef = firestore.collection('users').doc(auth.currentUser.uid);
//         const snapshot = await userRef.get();
//         if (snapshot.exists) {
//           setUserProfile(snapshot.data());
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleSaveProfile = async () => {
//     // Implement logic to save updated profile data to the database
//   };

//   return (
//     <div>
//       <h2>Profile Page</h2>
//       {userProfile && (
//         <div>
//           <p>Name: {userProfile.name}</p>
//           <p>Email: {userProfile.email}</p>
//           {/* Add other profile fields here */}
//           <button onClick={handleSaveProfile}>Save Profile</button>
//         </div>
//       )}
//     </div>
//   );
// };

 export default UserProfile;

