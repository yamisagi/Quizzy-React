import React from 'react';
import headerImg from '../assets/quiz-logo.png';

const Header = () => {
  return (
    <header>
      <img src={headerImg} alt='Quiz Logo' />
      <h1>Quizzy</h1>
    </header>
  );
};

export default Header;
