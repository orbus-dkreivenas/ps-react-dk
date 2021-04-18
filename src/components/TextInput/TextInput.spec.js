import React from "react";
import TextInput from "./TextInput";

describe("TextInput", () => {
    test("should render", () => {
        const input = <TextInput label="label" htmlId="id" name="name" onChange={() => {}} />;

        expect(input).toBeDefined();
    });
});