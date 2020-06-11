import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// components
import Header from './components/header/header.component';

// page components
import LandingPage from './components/pages/landing-page/landing-page.component';
import StopwatchPage from './components/pages/stopwatch-page/stopwatch-page.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/stopwatch' component={StopwatchPage} />
      </Switch>
    </div>
  );
}

export default App;
