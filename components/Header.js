import React from 'react';
import '../Css/Hangman.css'

const Header = () => {
  const date = new Date();
  return (
    <div>
      <h1>Author: Leo Boomgaarden Cook</h1>
      <h2>Today's Date: {date.toDateString()}</h2>
    </div>
  );
};

export default Header;