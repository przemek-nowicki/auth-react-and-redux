import React, { Component } from 'react';
import Login from './containers/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login></Login>
        </header>
      </div>
    );
  }
}

export default App;
