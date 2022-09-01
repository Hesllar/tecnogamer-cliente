import { useState } from 'react';
import {Col,Spinner } from 'react-bootstrap';
import {useModal} from '../../hooks/useModal';
import { DeleteCategory } from './DeleteCategory';
import { EditCategory } from './EditCategory';


export const CategoryListTable = ({category, deleteCategory,setIsUpdate}) => {

    const [value, setValue] = useState();

    const [isOpenDelete,openDelete,closeDelete] = useModal();
    const [isOpenEdit,openEdit,closeEdit] = useModal();

    const handleDelete = (id) =>{

        setValue(id);

        openDelete();
    }

    const handleEdit = (category) =>{

        setValue(category);

        openEdit();
    }


    
  
    return (
        <>
            <Col>
                    {
                        (category.length === 0) ?   (<Spinner animation="border" />)
                                    :   (
                                        <>
                                        
                                            <ul className="list-group">
                                                {
                                                    category.map(c => (
                                                        <li key={c._id} className="list-group-item d-flex justify-content-between">
                                                            <span  className="align-self-center">
                                                                {c.nombreCategoria}
                                                            </span> 
                                                            <button className='btn btn-primary' onClick={() => handleEdit(c)}>Editar</button>
                                                            <button className='btn btn-danger' onClick={() => handleDelete(c._id)}>Borrar</button>
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
                ?   <EditCategory 
                        isOpen={isOpenEdit} 
                        close={closeEdit} 
                        value={value} 
                        setIsUpdate={setIsUpdate}
                    />
                :null
            }
            <DeleteCategory 
                isOpen={isOpenDelete}
                close={closeDelete}
                value={value}
                deleteCategory={deleteCategory}
            />
        </>
        
    )
}
