import * as actionTypes from '../store/actionTypes';

const initialState = { loggedIn: false, user: null };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;