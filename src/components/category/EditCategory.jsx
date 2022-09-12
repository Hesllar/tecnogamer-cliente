import { useEffect } from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import {httpRequest, toast} from '../../helpers';
import { useForm } from '../../hooks';

export const EditCategory = ({isOpen,close,value, setIsUpdate}) => {

  const {onInputChange, formState, onResetForm} = useForm({
    nombreCategoria:value.nombreCategoria,
 
  });

  const handleUpdate = async(e) =>{
    try {
      e.preventDefault();
      
      const resp = await httpRequest(`${import.meta.env.VITE_URL_UPDATE_CATEGORY}${value._id}`,'UPDATE',formState);
      
      if(resp.status !== 200){

        const {data} =  resp.response;
        
        toast('error',data.message || 'Error no controlado');

      }

      const {message} = resp.data;

      setIsUpdate(true);
      
      close();

      toast('success', message);

    } catch (error) {

      toast('error', error);
      
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
      <ToastContainer />
    </Modal>
    
  )
}
