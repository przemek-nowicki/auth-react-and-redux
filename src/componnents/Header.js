import React, { Component } from 'react';

export default class Header extends Component { 
    logout = () => {
        this.props.logout();
    }
    
    render() {
        const { user } = this.props;
        return (
            <div>
                <div>Logged user: {user}</div>
                <div><button onClick={this.logout}>Loggout</button></div>
            </div>
        );
    }
}