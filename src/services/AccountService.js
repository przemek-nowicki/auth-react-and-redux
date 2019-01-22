export default class AccountServices {
    constructor(api) {
        this.api = api;
    }

    async login(username, password) {
         return this.api.postJSON('/api/auth', { username, password });
    }
}