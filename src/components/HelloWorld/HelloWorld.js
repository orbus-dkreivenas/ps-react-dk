import React from 'react';
import PropTypes from 'prop-types';

/** HelloWorld Component. */
function HelloWorld({message}) {
    return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string
}

HelloWorld.defaultProps = {
    message: "World"
}

export default HelloWorld;