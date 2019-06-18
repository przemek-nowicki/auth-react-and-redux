export default (name) => {
    if(!name) {
        return 'Name cannot be empty';
    }
    if(name.trim().length !== name.length) {
        return 'Given name cannot include trimming spaces';
    }
    return  name.length >= 2 ? null : 'Given name is too short';
}