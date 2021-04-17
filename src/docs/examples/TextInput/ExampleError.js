import React from 'react';
import TextInput from "ps-react-dk/TextInput";

/** Error TextInput */
export default function ExampleError() {
    return (
        <TextInput
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
        />
    )
}