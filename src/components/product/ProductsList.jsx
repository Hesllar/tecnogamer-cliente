import { useEffect,useState } from 'react';
import {Col,Spinner } from 'react-bootstrap';
import { useModal } from '../../hooks/useModal';
import {EditProduct} from '../product/EditProduct';
import { DeleteProduct } from '../product/DeleteProduct';

export const ProductsList = ({data, isLoading,deleteProduct, mark, category}) => {

    const [isOpenEditarPM,openEditarPM,closeEditarPM] = useModal();
    const [isOpenDeletePM,openDeletePM,closeDeletePM] = useModal();

    const [value, setValue] = useState();
    

    return (
        <>
            <Col>
            {
                (isLoading) ?   (<Spinner animation="border" />)
                            :   (
                                <>
                                
                                    <ul className="list-group">
                                        {
                                            data.map(pro => (
                                                <li key={pro._id} className="list-group-item d-flex justify-content-between">
                                                    <span  className="align-self-center">
                                                        {pro.nombreProducto}
                                                    </span> 
                                                    <button className='btn btn-primary'  onClick={() => {
                                                        setValue(pro);
                                                        openEditarPM();
                                                        }}>Editar</button>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        setValue(pro._id);
                                                        openDeletePM();
                                                    }}>Borrar</button>
                                                </li> 
                                            ))
                                        }
                                    </ul>
                                    <EditProduct 
                                        isOpen={isOpenEditarPM}
                                        close={closeEditarPM}
                                        value={value}
                                        mark={mark}
                                        category={category}
                                    />
                                </>
                                )
            }
                
            </Col>
            
            <DeleteProduct 
                isOpen={isOpenDeletePM}
                close={closeDeletePM}
                value={value}
                deleteProduct={deleteProduct}
            />
        </>
    )
}
