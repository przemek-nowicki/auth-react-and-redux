import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants/action.constant';

const initialState = { loggingIn: false, user: null };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                loggingIn: false,
                user: action.user
            };
        case LOGIN_FAILURE: 
            return {
                loggingIn: false
            }
            
        default:
            return state;
    }
};

export default reducer;