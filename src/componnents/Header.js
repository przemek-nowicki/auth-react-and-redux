import React, { Component } from 'react';

export default class Header extends Component { 
    render() {
        const { user } = this.props;
        return (<div>Logged user: {user}</div>)
    }
}