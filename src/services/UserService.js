export default class UserService {
    constructor(api) {
        this.api = api;
    }

    async register(name, email, password) {
        return this.api.postJSON('/api/users/register', { name, email, password });
    }
}