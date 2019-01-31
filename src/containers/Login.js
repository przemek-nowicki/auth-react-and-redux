import { connect } from 'react-redux';
import * as auth from '../store/actions/auth.action';

import Login from '../componnents/Login';

const mapStateToProps = state => {
    return {
        loggingIn: state.auth.loggingIn,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(auth.login(email, password)),
        loginOAuthGoogle: () => dispatch(auth.loginOAuthGoogle())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );