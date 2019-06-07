import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import ProtectedRoute from './componnents/ProtectedRoute';
import Api from './services/Api';

Api.url = 'http://localhost:4000';

class App extends Component {

  render() {
    return (
      <div className="App">
       <CssBaseline />
       <Switch>
          <Route 
            path='/login'
            component={ Login }
          />
           <Route 
            path='/register'
            component={ Register }
          />
          <ProtectedRoute
            path='/home'
            component={ Home }
          />
          <Redirect to='/login'/>
        </Switch>
      </div>
    );
  }
}

export default App;
