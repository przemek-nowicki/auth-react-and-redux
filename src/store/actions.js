import * as actionTypes from './actionTypes';

export const asyncStart = (action) => {
    return {
        type: actionTypes.ASYNC_START,
        action: action
    };
};

export const asyncEnd = () => {
    return {
        type: actionTypes.ASYNC_END
    };
};

export const login = (username, password) => {
    return (dispatch) => {
        dispatch(asyncStart('LOGIN_REQUEST'));
        setTimeout(() => { 
            dispatch(success('admin'));
            dispatch(asyncEnd())
        },2000);
    }

    function success(user) { return { type: actionTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: actionTypes.LOGIN_FAILURE, error } }
    function asyncStart(action) { return { type: actionTypes.ASYNC_START, actionType: action } }
}