import * as actionTypes from './actionTypes';


export const request = () => {
    return {
        type: actionTypes.LOGIN_REQUEST
    };
};

export const loginSuccess = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    };
};

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginSuccess('new token!'))
        //dispatch(request());
    };
};