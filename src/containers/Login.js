import { connect } from 'react-redux';
import { login } from '../store/actions';
import Login from '../componnents/Login/Login';

const mapStateToProps = state => {
    return {
        loading: state.common.loading,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );