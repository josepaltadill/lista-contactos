import React from 'react';

const ContactComponent = ({contact}) => {
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contact.completed ? (<i className='bi-toggle-on' style={{color: 'green'}}></i>) : (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)}
                {/* Cambiamos el código de la línea anterior por la correspondiente función */}
                {/* {taskCompletedIcon()} */}

                {/* <i className='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato'}}></i> */}

                {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>
        </tr>
    );
}

export default ContactComponent;
