import { connect } from 'react-redux';
import Header from '../componnents/Header';

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export default connect( mapStateToProps )( Header );