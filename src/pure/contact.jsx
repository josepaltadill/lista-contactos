import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactComponent = ({contact, connect}) => {
    /**
     * Función que retorna un icono de distinto color dependiendo del estado del contacto
     */
    function contactConnectedIcon() {
        if (contact.connected) {
            return (<i onClick={() => connect(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>);
        } else {
            return (<i onClick={() => connect(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>);
        }
    }
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {/* {contact.completed ? (<i className='bi-toggle-on' style={{color: 'green'}}></i>) : (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)} */}
                {/* Cambiamos el código de la línea anterior por la correspondiente función */}
                {contactConnectedIcon()}

                {/* <i className='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato'}}></i> */}

                {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>
        </tr>
    );
}

// ContactComponent.propTypes = {
//     contact: PropTypes.instanceOf(Contact).isRequired,
//     connected: PropTypes.func.isRequired
// }
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired
}

export default ContactComponent;
