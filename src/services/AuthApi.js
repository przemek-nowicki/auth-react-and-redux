import Api from './Api';

export default class AuthApi extends Api {
    createHeaders() {
        const headers = super.createHeaders();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            headers.append( 'Authorization', 'Bearer ' + user.token );
        }
        return headers;
    }
}