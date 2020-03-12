import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('checking to make the form and inputs are working properly and the submit button it rendering correctly ',()=>{
    const {getByLabelText} = render(<ContactForm/>);

    const firstName = getByLabelText(/first name/i)
    const lastName = getByLabelText(/last name/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)

} )