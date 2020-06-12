import React, { Component } from 'react';

import './stopwatch-page.styles.scss';

// material ui
import { Button, ButtonGroup, TextField } from '@material-ui/core';

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
    return (
      <div className='stopwatch-page'>
        <div
          className={`${
            this.state.openSaveModal ? 'open' : ''
          } save-modal-container`}
          id='save-modal-container'
        >
          <div className='save-modal' id='save-modal'>
            <form action=''>
              <TextField
                helperText=''
                label='Name'
                name='name'
                id='outlined-basic'
                variant='outlined'
                margin='dense'
              />
              <TextField
                helperText='Math Studing, Workout, etc'
                label='Category'
                name='category'
                id='outlined-basic'
                variant='outlined'
                margin='dense'
              />
              <TextField
                helperText=''
                label='Description'
                name='description'
                id='outlined-basic'
                variant='outlined'
                margin='dense'
                multiline
              />
            </form>
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
    this.setState({ openSaveModal: true }, () => {
      document.addEventListener('click', e => {
        const flyoutElement = document.getElementById('save-modal');
        let targetElement = e.target; // clicked element

        do {
          if (targetElement === flyoutElement) {
            return;
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
        } while (targetElement);

        // Clicked Outside
        this.setState({ openSaveModal: false });
      });
    });

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
