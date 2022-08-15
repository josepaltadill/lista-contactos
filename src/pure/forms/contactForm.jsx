import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactForm = ({add}) => {
    const nameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }
    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input type='text' id='inputName' className='form-control form-control-lg' ref={nameRef} required autoFocus placeholder='Contact Name' />
                <input type='text' id='inputEmail' className='form-control form-control-lg' ref={emailRef} required placeholder='Contact Email' />
            </div>
            <button type='submit' className='btn btn-primary btn-lg ms-2'>Add</button>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
