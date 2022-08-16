import {Link} from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Col, Card, Row} from 'react-bootstrap';
import { useForm } from '../../hooks';

const URLPOST = 'http://localhost:8000/api/v0/markregister';

export const AddMark = ({addMark}) => {

    const {onInputChange, formState, onResetForm} = useForm({
        nombreMarca:''
    });

    const handleSubmit = async(e) =>{

    try {
      e.preventDefault();

      const {data} = await axios.post(URLPOST,formState);

      addMark(data.Data);

      onResetForm();
      
    } catch (error) {

      console.log(error)
    }
   
  }

  return (
    <Col>
        <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
          <h3 className='regtitle'>Registro</h3>
          <Form className='Formregister' onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12">
                <Form.Control onChange={onInputChange} name="nombreMarca" type="text" placeholder="Ingrese una marca" value={formState.nombreMarca} required />
              </Col>
            </Form.Group>
            <Form.Group>
              <Link to="/" className="linkInicio">&larr; Volver Al Inicio</Link>
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="RegisterBoton mt-2" variant="primary" >Crear</Button>
            </Form.Group>
          </Form>
        </Card>
      </Col>
  )
}
