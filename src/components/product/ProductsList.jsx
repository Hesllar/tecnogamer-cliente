import { useEffect } from 'react';
import { useState } from 'react';
import {Col,Spinner } from 'react-bootstrap';
import { useGetProducts } from '../../hooks';
import { useModal } from '../../hooks/useModal';
import {EditProduct} from '../product/EditProduct';

export const ProductsList = ({data, isLoading}) => {

    const [isOpenEditarPM,openEditarPM,closeEditarPM] = useModal();

    const [value, setValue] = useState();
    console.log(value)
    useEffect(() => {
    }, [value])
    

    return (
        <>
            <Col>
            {
                (isLoading) ?   (<Spinner animation="border" />)
                            :   (
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
                                                    <button className='btn btn-danger'>Borrar</button>
                                                </li> 
                                            ))
                                        }
                                    </ul>
                                )
            }
                
            </Col>
            <EditProduct 
                isOpen={isOpenEditarPM}
                close={closeEditarPM}
                value={value}
            />
        </>
    )
}
