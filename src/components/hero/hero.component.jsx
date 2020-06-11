import React from 'react';

// material ui
import { Button } from '@material-ui/core';

import './hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text-content'>
        <h1>Some main text here.</h1>
        <span>A little sub text here</span>
      </div>
      <Button
        className='get-started-btn'
        size='large'
        variant='contained'
        color='primary'
      >
        Get Started
      </Button>
      <div className='learn-more-container'>
        <h5>Learn More</h5>
        <i className='fas fa-chevron-down'></i>
      </div>
    </div>
  );
};

export default Hero;
