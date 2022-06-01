export const validateUserLoginForm = (values) => {
    const {username, password} = values;

    const errors = {};

    if (!username) {
        errors.username = 'Required';
    } else if (username.length < 6) {
        errors.username = 'Username must be at least 6 characters long!';
    } else if (username.length > 15) {
        errors.username = 'Username cannot be longer than 15 characters';
    }

    if (!password) {
        errors.password = 'Required';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 chracters!';
    }

    return errors;
};