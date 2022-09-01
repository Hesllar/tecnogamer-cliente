import axios from 'axios';
import { useEffect } from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import { useForm } from '../../hooks';


export const EditCategory = ({isOpen,close,value, setIsUpdate}) => {

  const {onInputChange, formState, onResetForm} = useForm({
    nombreCategoria:value.nombreCategoria,
 
  });

  const handleUpdate = async(e) =>{
    try {
      e.preventDefault();
      
      await axios.put(`http://localhost:8000/api/v0/updatecateogry/${value._id}`, formState);
      
      setIsUpdate(true);
      
      close();
    } catch (error) {
      console.log(error)
    }
    
    
    
  }

  useEffect(()=>{
    if(!isOpen){
      onResetForm();
    }
  },[isOpen])


  return (

    <Modal show={isOpen} onHide={close}>
        <Modal.Header > 
            <Modal.Title>Editar Categoría</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
                <Form.Group>
                  <Form.Label>Nombre Categoría</Form.Label>
                  <Form.Control 
                    className="mt-1"
                    placeholder="Nombre Categoría"
                    name='nombreCategoria'
                    value={formState.nombreCategoria}
                    onChange={onInputChange}
                    type="text"
                  />
                  </Form.Group>
          </Modal.Body>
          <Modal.Footer >
              <Button  variant="secondary" onClick={close} >Cancelar</Button>
              <Button type="submit" variant="primary">Actualizar Categoría </Button>
          </Modal.Footer>
      </Form>
    </Modal>
    
  )
}
