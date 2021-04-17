import React from 'react'
import Label from 'ps-react-dk/Label'

/** Required Label */
export default function ExampleOptional() {
    return <Label label="This is required label" htmlFor="example" required={true} />
}