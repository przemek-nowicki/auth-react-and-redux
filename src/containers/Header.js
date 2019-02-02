import { connect } from 'react-redux';
import Header from '../componnents/Header';
import * as auth from '../store/actions/auth.action';

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(auth.logout())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Header );