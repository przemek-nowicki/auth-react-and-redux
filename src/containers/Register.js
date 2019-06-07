import { connect } from 'react-redux';
import * as auth from '../store/actions/auth.action';

import Register from '../componnents/Register';

const mapStateToProps = state => {
    return {
        loggingIn: state.auth.loggingIn,
        user: state.auth.user,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (email, password) => dispatch(auth.login(email, password)),
        loginOAuthGoogle: () => dispatch(auth.loginOAuthGoogle()),
        loginOAuthFacebook: () => dispatch(auth.loginOAuthFacebook())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Register );