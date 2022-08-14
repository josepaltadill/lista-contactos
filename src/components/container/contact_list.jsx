import React from 'react';
import ContactComponent from '../../pure/contact';

const ContactList = () => {
    
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
                                <ContactComponent></ContactComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactList;
