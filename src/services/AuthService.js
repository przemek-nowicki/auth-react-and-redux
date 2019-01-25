export default class AuthServices {
    constructor(api) {
        this.api = api;
    }

    async login(email, password) {
         return this.api.postJSON('/api/auth/login', { email, password });
    }
    
    async me() {
        return this.api.getJSON('/api/auth/me');
   }
}