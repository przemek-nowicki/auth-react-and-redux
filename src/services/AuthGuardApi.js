import Api from './Api';

export default class AuthGuardApi extends Api {
    createHeaders() {
        const headers = super.createHeaders();
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if (user && user.token) {
            headers.append( 'Authorization', 'bearer ' + user.token );
        }
        console.log('headers=',headers);
        return headers;
    }
}