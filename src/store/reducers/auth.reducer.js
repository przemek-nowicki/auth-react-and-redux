import { LOGIN_REQUEST, 
         LOGIN_SUCCESS, 
         LOGIN_FAILURE, 
         LOGOUT } from '../../constants/action.constant';

const initialState = { loggingIn: false, user: null, error: null };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                loggingIn: false,
                user: action.user,
                error: null
            };
        case LOGIN_FAILURE: 
            return {
                loggingIn: false,
                user: null,
                error: action.error
            };
        case LOGOUT:
            return {};     
        default:
            return state;
    }
};

export default reducer;