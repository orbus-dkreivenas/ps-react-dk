import React from "react";
import PropTypes from 'prop-types';

/** Label component */
function Label({label, required, htmlFor}) {
    return (
        <label style={{display: "block"}} htmlFor={htmlFor} >
            {label} {required && <span style={{color: "red"}}> *</span>}
        </label>
    );
}

Label.propTypes = {
    /** Label text */
    label: PropTypes.string.isRequired,

    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Display asterisk after label if true */
    required: PropTypes.bool,
};

export default Label;