import React, { Component } from "react";
import {hot} from 'react-hot-loader'
import './style.css'

 class App extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <h1 className={this.state.count > 5 ? 'warning':null}>Hellou from react</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App)