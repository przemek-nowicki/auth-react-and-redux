import React, { Component } from 'react';

class Home extends Component { 
    logout = () => {
        this.props.logout();
    }
    
    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>Welcome Home!</h1>
                <div>Logged user: {user}</div>
                <div><button onClick={this.logout}>Loggout</button></div>
            </div>
        );
    }
}

export default Home;