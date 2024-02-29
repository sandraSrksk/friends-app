// components/Header.js
import React from 'react';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header>
        <img src="/images/friends-app-logo.png" alt="Friends Logo" />
      <h1>Friendship App</h1>
      <nav>
        <ul>
          <li><LoginButton /></li>
          {/* Add other navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
