import { useState } from 'react';
import {Col,Spinner } from 'react-bootstrap';
import {useModal} from '../../hooks/useModal';
import { DeleteMark } from './DeleteMark';

export const MarcaListTable = ({mark,deleteMark}) => {

    const [value, setValue] = useState();
    const [isOpenDelete,openDelete,closeDelete] = useModal();
    
    const handleDelete = (id) =>{

        setValue(id);

        openDelete();
    }
  return (
    <Col>
                {
                    (mark.length === 0) ?   (<Spinner animation="border" />)
                                :   (
                                    <>
                                    
                                        <ul className="list-group">
                                            {
                                                mark.map(m => (
                                                    <li key={m._id} className="list-group-item d-flex justify-content-between">
                                                        <span  className="align-self-center">
                                                            {m.nombreMarca}
                                                        </span> 
                                                        <button className='btn btn-primary'>Editar</button>
                                                        <button className='btn btn-danger' onClick={() => handleDelete(m._id)}>Borrar</button>
                                                    </li> 
                                                ))
                                            }
                                        </ul>
                                        <DeleteMark
                                            isOpen={isOpenDelete}
                                            close={closeDelete}
                                            value={value}
                                            deleteMark={deleteMark}
                                        />
                                    </>
                                    )
                }
                    
        </Col>
  )
}
