import {LOGIN_SUCCESS, 
        LOGIN_FAILURE, 
        LOGIN_REQUEST } from '../../constants/action.constant';
import AuthService from '../../services/AuthService';
import Api from '../../services/Api';

const authService = new AuthService(new Api());

export const login = (username, password) => {
    return async (dispatch) => { 
        try {
            dispatch(request(username));
            const res = await authService.login(username, password);
            dispatch(success('admin'));
        } catch(e) {
            console.error(`Error code: ${e.code}\nError details: ${e.body}`);
            dispatch(failure(`Couldn't login user: ${username}`));
        }
        
    }
    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}