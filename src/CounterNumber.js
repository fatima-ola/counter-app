import React, { Component } from 'react';

class CounterNumber extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    };
  }

  //   addNumbers = () => {
  //     this.setState({
  //       number: this.state.number + 1,
  //     });
  //   };

  //   subtractNumbers = () => {
  //     this.setState({
  //       number: this.state.number - 1,
  //     });
  //   };

  render() {
    return (
      <div>
        {/* <h1>{this.state.number}</h1>
        <button onClick={this.addNumbers}>ADD 1</button>
        <button onClick={this.subtractNumbers}>SUBTRACT 1</button> */}
      </div>
    );
  }
}

export default CounterNumber;
