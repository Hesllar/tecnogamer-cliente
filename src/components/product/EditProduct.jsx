
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react'
import {Modal,Form,Alert,Button} from 'react-bootstrap'
import { useForm } from '../../hooks';

export const EditProduct = ({isOpen,close,value}) => {

  const [prod, setProd] = useState({
    nombreProducto:'',
    stock:0,
    precio:'',
    descripcion:'',
  })
  const {onInputChange, formState, onResetForm} = useForm({
    nombreProducto:'',
    stock:0,
    precio:'',
    descripcion:'',
  });

  const getProduct = async() =>{

    const {data} =  await axios.get(`http://localhost:8000/api/v0/oneproduct/${value._id}`);
    
    const {nombreProducto}  = data.Data
    setProd({
      nombreProducto,
      stock:0,
      precio:'',
      descripcion:'',
    });

  }


  useEffect(()=>{
    if(!isOpen){
      onResetForm();
    }else{
      getProduct();
    }
  },[isOpen])

  return (

    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control className="mt-2"
                placeholder="Nombre Producto"
                value={prod.nombreProducto}
                type="text"/> 
            
                <Form.Control className="mt-2"
                placeholder="Ingrese Stock"
                type="number"/> 
              

                <Form.Control className="mt-2"
                placeholder="Ingrese Precio"
                type="number"/> 
              
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer >
            <Button  variant="secondary" onClick={close} >Cancelar</Button>
            <Button variant="primary"  >Actualizar Mi Cuenta </Button>
        </Modal.Footer>
    </Modal>
    
  )
}
