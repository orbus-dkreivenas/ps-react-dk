import React from 'react';
import RegistrationForm from 'ps-react-dk/RegistrationForm';

/** RegistrationForm example */
export default function ExampleRegistrationForm() {
  return <RegistrationForm onSubmit={(user) => console.log(user)} />
}