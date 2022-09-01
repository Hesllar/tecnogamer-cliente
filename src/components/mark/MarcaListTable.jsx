import { useState } from 'react';
import {Col,Spinner } from 'react-bootstrap';
import {useModal} from '../../hooks/useModal';
import { DeleteMark } from './DeleteMark';
import { EditMark } from './EditMark';

export const MarcaListTable = ({mark,deleteMark, setIsUpdate}) => {

    const [value, setValue] = useState();

    const [isOpenDelete,openDelete,closeDelete] = useModal();

    const [isOpenEdit,openEdit,closeEdit] = useModal();


    const handleEdit = (mark) =>{

        setValue(mark);

        openEdit();
    }

    const handleDelete = (id) =>{

        setValue(id);

        openDelete();
    }

    return (
        <>
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
                                                            <button className='btn btn-primary' onClick={()=>handleEdit(m)} >Editar</button>
                                                            <button className='btn btn-danger' onClick={() => handleDelete(m._id)}>Borrar</button>
                                                        </li> 
                                                    ))
                                                }
                                            </ul>
                                        </>
                                        )
                    }
                        
            </Col>
            {
                (isOpenEdit)
                    ?  <EditMark 
                            isOpen={isOpenEdit} 
                            close={closeEdit} 
                            value={value} 
                            setIsUpdate={setIsUpdate}
                        />
                    :   null
            }
            <DeleteMark
                isOpen={isOpenDelete}
                close={closeDelete}
                value={value}
                deleteMark={deleteMark}
            />
        </>
    )
}
