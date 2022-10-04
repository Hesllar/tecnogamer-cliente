import { useState } from 'react';
import {  Col, Spinner } from 'react-bootstrap';
import { useModal } from '../../../hooks/useModal';
import { DeleteUser } from './DeleteUser';


export const UserAdminList = ({data, setIsUpdate,deleteUser}) => {

  const [value, setValue] = useState();
  const [isOpenDeletePM,openDeletePM,closeDeletePM] = useModal();

  return (
    <>
        <Col>
        {   
            (data.length === 0) ?   (<Spinner animation="border" />)
                        :   (
                            <>
                                <ul className="list-group">
                                    {
                                        data.flatMap(user => (
                                            <li key={user._id} className="list-group-item d-flex justify-content-between">
                                                <span  className="align-self-center">
                                                    {user.nombreUsuario}
                                                </span> 
                                                <button className='btn btn-primary'  onClick={() => {
                                                    setValue(user);
                                                    openEditarPM();}}>Editar</button>
                                                <button className='btn btn-danger' onClick={() => {
                                                    setValue(user._id);
                                                    openDeletePM();}}>Borrar</button>
                                            </li> 
                                        ))
                                    }
                                </ul>
                            </>
                            )
        }
        </Col>

        <DeleteUser 
                    isOpen={isOpenDeletePM}
                    close={closeDeletePM}
                    value={value}
                    deleteUser={deleteUser}
                />
        </>
  )
}

