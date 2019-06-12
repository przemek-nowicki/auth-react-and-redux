import { connect } from 'react-redux';
import * as auth from '../store/actions/auth.action';
import Register from '../componnents/Register';

import Api from '../services/Api';
import UserService from '../services/UserService';
import {withService} from '../serviceContext'

const service = new UserService(new Api());

const mapStateToProps = state => {
    return {
        loggingIn: state.auth.loggingIn,
        user: state.auth.user,
        error: state.auth.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        loginOAuthGoogle: () => dispatch(auth.loginOAuthGoogle()),
        loginOAuthFacebook: () => dispatch(auth.loginOAuthFacebook())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withService(Register,service) );