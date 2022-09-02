import {Modal,Alert,Button} from 'react-bootstrap'
import {httpRequest} from '../../helpers/httpRequest';

export const DeleteMark = ({isOpen,close,value,deleteMark}) => {

    const handleDelete = async(id) =>{

        try {

             await httpRequest(`${import.meta.env.VITE_URL_DELETE_MARK}${id}`,'DELETE');

            deleteMark(id);

            close();
            
        } catch (error) {

            console.log(error);

        }
        
    }


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
