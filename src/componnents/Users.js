import React, { Component } from 'react';
import AuthServices from '../services/AuthService';
import AuthGuardApi from '../services/AuthGuardApi';

export default class Users extends Component { 
    constructor() {
       super();
       this.state = {loggedUser: null, error: null};
       this.authServices = new AuthServices(new AuthGuardApi());
    }
    
    getLoggedIn = async () => {
        try {
            const logged = await this.authServices.me();
            if(logged) {
                this.setState({loggedUser: logged, error: null});
            }
        } catch(e) {
            if(e.body) {
                this.setState({error: `[code: ${e.code}]: ${e.body.message}`, loggedUser: null});
            }
        }
    }

    render() {
        const { loggedUser, error } = this.state;
        return (
            <div>
                <div>{error}</div>
                <div>Logged: {loggedUser ? loggedUser.email : ''}</div>
                <button onClick={this.getLoggedIn}>GET LOGGED IN USER</button>
            </div>
        );
    }
}