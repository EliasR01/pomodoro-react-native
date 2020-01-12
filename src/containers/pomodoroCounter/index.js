import React, { Component } from 'react';
import Counter from '../../components/counter';
import { Vibration } from 'react-native';
import CounterConfig from '../../components/counterConfig';

class PomodoroCounter extends Component {
  state = {
    secondsCounter: 0,
    minutesCounter: 25,
    intervalTime: 1000,
    started: false
  };

  startCount = () => {
    if (!this.state.started) {
      this.setState({ started: true });
      counterInterval = setInterval(() => {
        if (
          this.state.minutesCounter === 0 &&
          this.state.secondsCounter === 1
        ) {
          Vibration.vibrate([500, 500, 500]);
          clearInterval(counterInterval);
          this.setState({ started: false });
        }
        if (
          this.state.secondsCounter === 0 &&
          this.state.minutesCounter !== 0
        ) {
          this.setState({
            minutesCounter: this.state.minutesCounter - 1,
            secondsCounter: 59
          });
        } else {
          this.setState({ secondsCounter: this.state.secondsCounter - 1 });
        }
      }, this.state.intervalTime);
    }
  };

  setMinutes = type => {
    if (type === 'Break') {
      this.setState({
        minutesCounter: 5
      });
    }
    if (type === 'Pomodoro') {
      this.setState({
        minutesCounter: 25
      });
    }
  };

  pauseCounter = () => {
    clearInterval(counterInterval);
  };

  resetCounter = () => {
    clearInterval(counterInterval);
    this.setState({
      secondsCounter: 0,
      minutesCounter: 25
    });
  };

  render() {
    return (
      <>
        <CounterConfig changeTimer={this.setMinutes} />
        <Counter
          seconds={this.state.secondsCounter}
          minutes={this.state.minutesCounter}
          start={this.startCount}
          stop={this.pauseCounter}
          reset={this.resetCounter}
        />
      </>
    );
  }
}

export default PomodoroCounter;
