import { connect } from 'react-redux';
import { login } from '../store/actions/auth.action';

import Login from '../componnents/Login';

const mapStateToProps = state => {
    return {
        loggingIn: state.auth.loggingIn,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );