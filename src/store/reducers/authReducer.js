import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    isLogging: false
};

const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_REQUEST:
            return { ...state, isLogging: true};
        case actionTypes.LOGIN_SUCCESS:
            return {...state, token: action.token};
        default:
            return state;
    }
};

export default authReducer;