import React from 'react';

const ContactComponent = () => {
    return (
        <tr className='fw-normal'>
            <th>
                {/* <span className='ms-2'>{task.name}</span> */}
                <span className='ms-2'>Nom contacte</span>
            </th>
            <td className='align-middle'>
                {/* <span>{task.description}</span> */}
                <span>Email contacte</span>
            </td>
            <td className='align-middle'>
                {/* {task.completed ? (<i className='bi-toggle-on' style={{color: 'green'}}></i>) : (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)} */}
                {/* Cambiamos el código de la línea anterior por la correspondiente función */}
                {/* {taskCompletedIcon()} */}

                {/* <i className='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato'}}></i> */}
                <i className='bi-trash task-action' style={{color: 'tomato'}}></i>

                {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>
        </tr>
    );
}

export default ContactComponent;
