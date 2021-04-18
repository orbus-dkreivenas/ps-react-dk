import React from 'react';
import TextInputBEM from "ps-react-dk/TextInputBEM";

/** Error TextInput */
export default function ExampleError() {
    return (
        <TextInputBEM
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    )
}