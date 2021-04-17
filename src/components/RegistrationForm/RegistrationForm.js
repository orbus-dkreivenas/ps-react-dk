import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
const RegistrationForm = (props) => {
    const {
        minPasswordLength,
        confirmationMessage,
        onSubmit
    } = props;
    const [user, setUser] = useState({ email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const onChange = (event) => {
        setUser(currentUser => {
            const user = {...currentUser};
            user[event.target.name] = event.target.value;
            return user;
        });
    };

    // Returns a number from 0 to 100 that represents password quality.
    // For simplicity, just returning % of min length entered.
    // Could enhance with checks for number, special char, unique characters, etc.
    const passwordQuality = (password) => {
        if (!password) return null;
        if (password.length >= minPasswordLength) return 100;
        const percentOfMinLength = parseInt(password.length/minPasswordLength * 100, 10);
        return percentOfMinLength;
    };

    const validate = ({email, password}) => {
        const errors = {};
        if (!email) errors.email = 'Email required.';
        if (password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;

        setErrors(errors);
        const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
        return formIsValid;
    };

    const onFormSubmit = () => {
        const formIsValid = validate(user);
        if (formIsValid) {
          onSubmit(user);
          setSubmitted(true);
        }
    };

    return (
        submitted 
            ? <h2>{confirmationMessage}</h2> 
            : <div>
                <TextInput
                  htmlId="registration-form-email"
                  name="email"
                  onChange={onChange}
                  label="Email"
                  value={user.email}
                  error={errors.email}
                  required />

                <PasswordInput
                  htmlId="registration-form-password"
                  name="password"
                  value={user.password}
                  onChange={onChange}
                  quality={passwordQuality(user.password)}
                  showVisibilityToggle
                  maxLength={50}
                  error={errors.password} />

                <input type="submit" value="Register" onClick={onFormSubmit} />
            </div>
    );
}

RegistrationForm.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number
}

RegistrationForm.defaultProps = {
  confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};

export default RegistrationForm;
