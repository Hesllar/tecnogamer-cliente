import {Modal,Alert,Button} from 'react-bootstrap'
import {httpRequest} from '../../helpers/httpRequest';

export const DeleteCategory = ({isOpen,close,value,deleteCategory}) => {
  
    const handleDelete = async(id) =>{

        try {

            await httpRequest(`${import.meta.env.VITE_URL_DELETE_CATEGORY}${id}`,'DELETE');

            deleteCategory(id);

            close();
            
        } catch (error) {

            console.log(error);

        }
        
    }


    return (

        <Modal show={isOpen} onHide={close}>
            <Modal.Header > 
                <Modal.Title>Eliminar Categoría</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                ¿Estas Seguro que deseas eliminar esta categoría? 
                <br/>
                <b>Se eliminara permanentemente</b>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close} >Cancelar</Button>
                <Button variant="danger" onClick={() =>{handleDelete(value)}} >Eliminar Categoría</Button>
            </Modal.Footer>
        </Modal>
        
    )
}
