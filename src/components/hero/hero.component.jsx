import React from 'react';

import './hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text-content'>
        <h1>Some main text here.</h1>
        <span>A little sub text here</span>
      </div>
      <button>Get Started</button>
      <div className='learn-more-container'>
        <h5>Learn More</h5>
        <i className='fas fa-chevron-down'></i>
      </div>
    </div>
  );
};

export default Hero;
