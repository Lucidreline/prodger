import React, { Component } from 'react';

import './stopwatch-page.styles.scss';

// material ui
import { Button, ButtonGroup } from '@material-ui/core';

// components
import StopWatch from '../../stopwatch/stopwatch.component';

class StopwatchPage extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      paused: true,
      timeStarted: null,
      sessions: [],
      openSaveModal: false,
    };
  }

  render() {
    window.addEventListener('mouseup', e => {
      // this will close the save modal when user clicks outside of it
      var saveModal = document.getElementById('save-modal');
      if (
        this.state.openSaveModal &&
        e.target !== saveModal &&
        e.target.parentNode !== saveModal
      ) {
        this.setState({ openSaveModal: false });
      }
    });

    return (
      <div className='stopwatch-page'>
        <div
          className={`${
            this.state.openSaveModal ? 'open' : ''
          } save-modal-container`}
          id='save-modal-container'
        >
          <div className='save-modal' id='save-modal'>
            <h2>Hi, im the modal</h2>
          </div>
        </div>
        <div
          className={`${this.state.paused ? '' : 'pulse'} stopwatch-container`}
        >
          <StopWatch seconds={this.state.seconds} />
          <ButtonGroup
            size='large'
            variant='text'
            color='primary'
            aria-label='text primary button group'
          >
            {this.whichBtnsToShow()}
          </ButtonGroup>
        </div>
      </div>
    );
  }

  whichBtnsToShow = () => {
    // handles what buttons show up
    if (this.state.seconds === 0 && this.state.paused) {
      return (
        <Button size='large' onClick={this.startStopwatch}>
          Start
        </Button>
      );
    } else if (this.state.paused) {
      return (
        <div className='paused-btns'>
          <Button size='large' onClick={this.saveStopwatch}>
            Save
          </Button>
          <Button size='large' onClick={this.resumeStopwatch}>
            Resume
          </Button>
          <Button size='large' onClick={this.resetStopwatch}>
            Reset
          </Button>
        </div>
      );
    } else {
      return (
        <div className='unpaused-btns'>
          <Button size='large' onClick={this.pauseStopwatch}>
            Pause
          </Button>
          <Button size='large' onClick={this.resetStopwatch}>
            Reset
          </Button>
        </div>
      );
    }
  };

  startStopwatch = () => {
    this.setState({ timeStarted: Date.now() });
    this.resumeStopwatch();
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

  saveStopwatch = () => {
    this.setState({ openSaveModal: true });
    // const { seconds, timeStarted, sessions } = this.state;
    // const newSession = {
    //   seconds,
    //   timeStarted,
    //   timeEnded: Date.now(),
    // };
    // sessions.push(newSession);
    // this.setState({ sessions }, () => {
    //   this.resetStopwatch();
    // });
  };

  componentWillUnmount() {
    this.resetStopwatch();
  }
}

export default StopwatchPage;
