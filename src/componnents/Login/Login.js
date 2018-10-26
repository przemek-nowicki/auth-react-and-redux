import React, { Fragment, PureComponent } from 'react';

export default class Login extends React.Component {
    clickMe = () => {
       this.props.authStart();
    };

    render() {
        return (
            <Fragment>
                <input type="text"/>
                <input type="password"/>
                <button onClick={this.clickMe}>Login</button>
            </Fragment>
        );
    }
}