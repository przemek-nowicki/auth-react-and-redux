import React, { Component } from 'react';
import Login from './containers/Login';
import './App.css';
import Header from './containers/Header';
import Api from './services/Api';

Api.url = 'http://echo.jsontest.com/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Login></Login>
      </div>
    );
  }
}

export default App;
