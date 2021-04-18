import React from 'react';
import TextInputCSSModules from "ps-react-dk/TextInputCSSModules";

/** Error TextInput */
export default function ExampleError() {
    return (
        <TextInputCSSModules
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    )
}