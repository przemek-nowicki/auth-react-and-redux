import React, { Fragment } from 'react';

export default class Login extends React.Component {

    clickMe = () => {
       this.props.login('admin', 'password');
    };

    render() {
        return (
            <Fragment>
                Token={this.props.token}
                <input type="text"/>
                <input type="password"/>
                <button onClick={this.clickMe}>Login</button>
            </Fragment>
        );
    }
}