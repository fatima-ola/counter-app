import React, { Component } from 'react';
import './CounterNumber.css';

class CounterNumber extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
      counterFive: 0,
    };
  }

  addOne = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  subtractOne = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  addFive = () => {
    this.setState({
      counterFive: this.state.counterFive + 5,
    });
  };

  subtractFive = () => {
    this.setState({
      counterFive: this.state.counterFive - 5,
    });
  };
  render() {
    return (
      <div>
        <p>Counting in 1's</p>
        <h1>{this.state.number}</h1>
        <button onClick={this.addOne}>ADD 1</button>
        <button onClick={this.subtractOne}>SUBTRACT 1</button>
        <div>
          <p>Counting in 5's</p>
          <h1>{this.state.counterFive}</h1>
          <button onClick={this.addFive}>ADD 5</button>
          <button onClick={this.subtractFive}>SUBTRACT 5</button>
        </div>
      </div>
    );
  }
}

export default CounterNumber;
