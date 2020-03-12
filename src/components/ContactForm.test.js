import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('checking to make the form and inputs are working properly and the submit button it rendering correctly ',()=>{

    const {getByLabelText, getByTestId , findByText, findByDisplayValue} = render(<ContactForm/>);

    const firstName = getByLabelText(/first name/i)
    const lastName = getByLabelText(/last name/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)

    fireEvent.change(firstName, {target: {name: 'firstName', value: 'dylan'}})
    fireEvent.change(lastName, {target: {name: 'lastName', value: 'collins'}})
    fireEvent.change(email, {target: {name: 'email', value: 'dylancollins@aol.com'}})
    fireEvent.change(message, {target: {name: 'message', value: 'hello world'}})

    const button = getByTestId(/submit/i);
    fireEvent.submit(button)

    
    findByDisplayValue(/submit/i)

    findByText(/dylan/i);
    findByText(/collins/i);
    findByText(/dylancollins@aol.com/i);
    findByText(/hellow world/i);  
} )

