
import { useEffect } from 'react'
import {Modal,Alert,Button} from 'react-bootstrap'
import axios from 'axios';

export const DeleteProduct = ({isOpen,close,value,deleteProduct}) => {

    //Eliminar producto

    const handleDelete = async(id) =>{

        try {

            await axios.delete(`http://localhost:8000/api/v0/deleteproduct/${id}`);

            deleteProduct(id);

            close();
            
        } catch (error) {

            console.log(error);

        }
        
    }

  useEffect(()=>{
        if(!isOpen){
            
        }
    },[isOpen]);

  return (

    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Alert variant="danger">
            ¿Estas Seguro que deseas eliminar este producto? 
            <br/>
            <b>Se eliminara permanentemente</b>
            </Alert>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close} >Cancelar</Button>
            <Button variant="danger" onClick={() =>{handleDelete(value)}} >Eliminar Producto</Button>
        </Modal.Footer>
    </Modal>
    
  )
}
