import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
        </Counter>
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  buttonClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));

  };
  render() {
    return <button onClick={this.buttonClick}>{this.state.count} Likes </button>;
  }
}


export default App;
