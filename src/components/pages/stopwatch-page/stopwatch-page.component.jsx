import React, { Component } from 'react';

import './stopwatch-page.styles.scss';

// components
import StopWatch from '../../stopwatch/stopwatch.component';

class StopwatchPage extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      paused: true,
    };
  }

  render() {
    return (
      <div className='stopwatch-page'>
        <div
          className={`${this.state.paused ? '' : 'pulse'} stopwatch-container`}
        >
          <StopWatch seconds={this.state.seconds} />
          {this.whichBtnsToShow()}
        </div>
      </div>
    );
  }

  whichBtnsToShow = () => {
    // handles what buttons show up
    if (this.state.seconds === 0 && this.state.paused) {
      return <button onClick={this.resumeStopwatch}>Start</button>;
    } else if (this.state.paused) {
      return (
        <div className='paused-btns'>
          <button onClick={this.resumeStopwatch}>Resume</button>
          <button onClick={this.resetStopwatch}>Reset</button>
        </div>
      );
    } else {
      return (
        <div className='unpaused-btns'>
          <button onClick={this.pauseStopwatch}>Pause</button>
          <button onClick={this.resetStopwatch}>Reset</button>
        </div>
      );
    }
  };

  resumeStopwatch = () => {
    //this first setState is to remove the 1 second lag when the user hit resume
    this.setState(() => ({
      paused: false,
    }));

    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds++,
      }));
    }, 1000);
  };

  pauseStopwatch = () => {
    this.setState({ paused: true }, () => {
      clearInterval(this.myInterval);
    });
  };

  resetStopwatch = () => {
    this.setState({ seconds: 0, paused: true }, () => {
      clearInterval(this.myInterval);
    });
  };

  componentWillUnmount() {
    this.resetStopwatch();
  }
}

export default StopwatchPage;
