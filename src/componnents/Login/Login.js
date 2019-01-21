import React, { Fragment } from 'react';

export default class Login extends React.Component {

    clickMe = () => {
       this.props.login('admin', 'password');
    };

    render() {
        const { loading, user } = this.props;
        return (
            <Fragment>
                <input type="text"/>
                <input type="password"/>
                <button onClick={() => this.clickMe()} disabled={loading}>Login</button>
            </Fragment>
        );
    }
}