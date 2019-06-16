import * as EmailValidator from 'email-validator';

export default (email) => {
    return EmailValidator.validate(email);
}