import { connect } from 'react-redux';
import Home from '../componnents/Home';
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

export default connect( mapStateToProps, mapDispatchToProps )( Home );