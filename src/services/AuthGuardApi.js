import Api from './Api';

export default class AuthGuardApi extends Api {
    createHeaders() {
        const headers = super.createHeaders();
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.token) {
            headers.append( 'x-access-token', user.token );
        }
        return headers;
    }
}