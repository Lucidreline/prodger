import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = props => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='logo-container'>
          <Link to='/'>
            <h1 className='logo'>Prodger</h1>
          </Link>
        </div>
        <div className='links-container'>
          <Link className='link' to='/login'>
            Log In
          </Link>
          <Link className='link' to='/signup'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
