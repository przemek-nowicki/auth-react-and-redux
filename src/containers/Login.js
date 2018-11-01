import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Login from '../componnents/Login/Login';

const mapStateToProps = state => {
    return {
        token: state.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch( actions.login(username, password) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );