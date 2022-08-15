import React, {useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../../pure/contact';
import ContactForm from '../../pure/forms/contactForm';

const ContactList = () => {
    const contactDemo1 = new Contact('Nom contacte 1', 'Email contacte 1', true);
    const contactDemo2 = new Contact('Nom contacte 2', 'Email contacte 2', false);
    const contactDemo3 = new Contact('Nom contacte 3', 'Email contacte 3', true);

    const [contacts, setContacts] = useState([contactDemo1, contactDemo2, contactDemo3]);

    function connectedContact(contact) {
        console.log('Contacto conectado: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function addContact(contact) {
        console.log('addContact', contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            connect={connectedContact}
                                        >
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;