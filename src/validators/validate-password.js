export default (password) => {
    if(!password) {
        return 'Password cannot be empty';
    }
    return password.length > 2 ? null : 'Given password is too short';
}