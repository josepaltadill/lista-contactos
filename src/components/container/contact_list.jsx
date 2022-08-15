import React, {useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../../pure/contact';

const ContactList = () => {
    const contactDemo1 = new Contact('Nom contacte 1', 'Email contacte 1', true);
    const contactDemo2 = new Contact('Nom contacte 2', 'Email contacte 2', false);
    const contactDemo3 = new Contact('Nom contacte 3', 'Email contacte 3', true);

    const [contacts, setContacts] = useState([contactDemo1, contactDemo2, contactDemo3]);

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
                                        >
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactList;
