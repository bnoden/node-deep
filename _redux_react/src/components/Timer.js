import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormatTime from './FormatTime';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  tick() {
    const { seconds } = this.state;
    this.setState({
      seconds: seconds + 1
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className="timer" style={timerStyle}>
        {FormatTime(seconds)}
      </div>
    );
  }
}

const timerStyle = {
  display: 'none'
};

export default Timer;
