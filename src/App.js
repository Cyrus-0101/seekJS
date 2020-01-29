import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      string: 'Hey there, Cyrus made this sexy code.'
    }
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string}</p>
        <button>Change text</button>
      </header>
    </div>
    );
  }
  
}

export default App;
