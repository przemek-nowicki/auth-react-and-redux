import * as EmailValidator from 'email-validator';

export default (email) => {
    if(!email) {
        return 'Email address cannot be empty';
    }
    return EmailValidator.validate(email) ? null : 'Email address is incorrect';
}