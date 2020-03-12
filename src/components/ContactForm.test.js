import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('checking to make sure the component renders',()=>{
    render(<ContactForm/>)
} )