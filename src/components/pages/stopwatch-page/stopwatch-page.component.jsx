import React, { Component } from 'react';

// components
import StopWatch from '../../stopwatch/stopwatch.component';

class StopwatchPage extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
  }

  render() {
    return (
      <div className='stopwatch-page'>
        <StopWatch seconds={this.state.seconds} />
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds++,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default StopwatchPage;
