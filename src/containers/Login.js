import { connect } from 'react-redux';
import {authStart} from '../store/actions';
import Login from '../componnents/Login/Login';

const mapStateToProps = state => {
    return {
        loading: state.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authStart: () => dispatch( authStart() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );