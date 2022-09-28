import { Form, Button, Col, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { httpRequest, toast } from '../../helpers';
import { useForm } from '../../hooks';



export const Register = () => {

  const navigate = useNavigate();

  const { onInputChange, formState, onResetForm } = useForm({
    nombre: '',
    apellido: '',
    correo: '',
    rut: '',
    fono: '',
    contrasena: ''
  });

  const handleSubmit = async (e) => {
    try {

      e.preventDefault();

      const resp = await httpRequest(import.meta.env.VITE_URL_CREATE_USER, 'CREATE', formState);

      if (resp.status !== 200) {

        const { data } = resp.response;

        toast('error', data.message || 'Error no controlado');

        return;
      }

      const { data } = resp;

      toast('success', `${data.message}, su nombre usuario ha sido enviado al correo registrado`);

      // await httpRequest(import.meta.env.VITE_URL_EMAIL, 'CREATE', { correo: formState.correo });

      setTimeout(() => {

        navigate('/login', {
          replace: true
        });

      }, 2600);

    } catch (error) {
      toast('error', error);
    }
  }

  return (
    <Col className='mt-2'>
      <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
        <h3 className='regtitle'>Registro</h3>
        <Form className='Formregister' onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Col sm="6">
              <Form.Control onChange={onInputChange} name="nombre" type="text" placeholder="Nombre" value={formState.nombre} />
            </Col>
            <Col sm="6">
              <Form.Control onChange={onInputChange} type="text" name="apellido" placeholder="Apellido" value={formState.apellido} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Col sm="12">
              <Form.Control autoComplete="true" onChange={onInputChange} name="correo" type="email" placeholder="Correo" value={formState.correo} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Col sm="12">
              <Form.Control onChange={onInputChange} name="rut" type="text" placeholder="Rut" value={formState.rut} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Col sm="12">
              <Form.Control onChange={onInputChange} name="fono" type="text" placeholder="Fono" value={formState.fono} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Col sm="12">
              <Form.Control onChange={onInputChange} name="contrasena" type="password" placeholder="Contraseña" value={formState.contrasena} />
            </Col>
          </Form.Group>
          <Form.Group >
            <Button type="submit" className="RegisterBoton mt-2" variant="success"  >Registrarse</Button>
          </Form.Group>
        </Form>
      </Card>
      <ToastContainer />
    </Col>

  )
}

