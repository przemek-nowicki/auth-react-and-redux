import React, { Component, Fragment } from 'react';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    
    submit = (ev) => {
       ev.preventDefault();
       const { username, password } = this.state;
       this.props.login(username, password);
    };

    inputChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    siggningInWithGoogle = () => {
        this.props.loginOAuthGoogle();
    };

    render() {
        const { loggingIn } = this.props;
        const { username, password } = this.state;
        return (
            <Fragment>
                <form name="form" onSubmit={ this.submit } noValidate>
                    <input type="text" name="username" value={username} onChange={this.inputChange}/>
                    <input type="password" name="password" value={password} onChange={this.inputChange}/>
                    <button disabled={loggingIn}>Login</button>
                </form>
                <button onClick={this.siggningInWithGoogle}>Signing in with Google</button>
            </Fragment>
        );
    }
}