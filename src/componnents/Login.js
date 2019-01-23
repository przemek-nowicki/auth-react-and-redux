import React, { Component, Fragment } from 'react';

export default class Login extends Component {

    submit (ev) {
       ev.preventDefault();
       this.props.login('admin', 'password');
    };

    render() {
        const { loggingIn } = this.props;
        return (
            <Fragment>
                <form name="form" onSubmit={ ev => this.submit(ev) } noValidate>
                    <input type="text"/>
                    <input type="password"/>
                    <button disabled={loggingIn}>Login</button>
                </form>
            </Fragment>
        );
    }
}