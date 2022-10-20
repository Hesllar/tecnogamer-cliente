import { useContext, useState } from 'react';
import { Form, Button, Col, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../../context/UserContext';
import { httpRequest, toast } from '../../helpers';
import { useForm } from '../../hooks';

export const Login = () => {

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    const { onInputChange, formState } = useForm({
        nombreUsuario: '',
        contrasena: ''
    });

    const [logged, setLogged] = useState(null);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLogged(true);
            const resp = await httpRequest(import.meta.env.VITE_URL_LOGIN, 'CREATE', formState);

            if (resp.status !== 200) {
                setLogged(false);
                const { data } = resp.response;

                toast('error', data.message || 'Error no controlado');

                return;
            }

            const { data } = resp;

            const respToken = await httpRequest(import.meta.env.VITE_CREATE_TOKEN, 'CREATE', { apiKey: data.Data.rol === 2 ? import.meta.env.VITE_APIKEY_ADMIN : import.meta.env.VITE_APIKEY_USER });

            const { token } = respToken.data.Data;

            localStorage.setItem('token', token);

            localStorage.setItem('user', JSON.stringify(data.Data));

            toast('success', data.message);



            setTimeout(() => {

                setUser({
                    logged: true,
                    userData: data.Data
                });

                navigate('/', {
                    replace: true
                });

            }, 2500);

        } catch (error) {
            console.log(error)
            toast('error', error);
        }
    }

    return (
        <Col className='mt-2'>
            <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
                <h3 className='regtitle'>Inicio sesion</h3>
                <Form className='Formregister' onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Control autoComplete="true" onChange={onInputChange} name="nombreUsuario" type="text" placeholder="Nombre usuario" value={formState.nombreUsuario} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Control onChange={onInputChange} name="contrasena" type="password" placeholder="Contraseña" value={formState.contrasena} />
                        </Col>
                    </Form.Group>
                    <Form.Group >
                        <Button type="submit" className="RegisterBoton mt-2" variant="success" disabled={!!logged} >Iniciar sesión</Button>
                    </Form.Group>
                </Form>
            </Card>
            <ToastContainer />
        </Col>
    )
}
