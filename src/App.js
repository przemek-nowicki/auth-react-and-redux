import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './containers/Login';
import './App.css';
import Header from './containers/Header';
import Users from './componnents/Users';
import Api from './services/Api';

Api.url = 'http://localhost:4000';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Users></Users>
        <Header></Header>
        <Login></Login>
      </div>
    );
  }
}

export default App;
