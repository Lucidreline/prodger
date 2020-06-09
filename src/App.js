import React from 'react';
import './App.css';

// components
import Header from './components/header/header.component';

// page components
import LandingPage from './components/pages/landing-page/landing-page.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
