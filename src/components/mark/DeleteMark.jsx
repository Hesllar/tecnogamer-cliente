import { useEffect } from 'react'
import {Modal,Alert,Button} from 'react-bootstrap'
import axios from 'axios'

export const DeleteMark = ({isOpen,close,value,deleteMark}) => {

    const handleDelete = async(id) =>{

        try {

            await axios.delete(`http://localhost:8000/api/v0/deletemark/${id}`);

            deleteMark(id);

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
                <Modal.Title>Eliminar Marca</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                ¿Estas Seguro que deseas eliminar esta Marca? 
                <br/>
                <b>Se eliminara permanentemente</b>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close} >Cancelar</Button>
                <Button variant="danger" onClick={() =>{handleDelete(value)}} >Eliminar Marca</Button>
            </Modal.Footer>
        </Modal>
  )
}
