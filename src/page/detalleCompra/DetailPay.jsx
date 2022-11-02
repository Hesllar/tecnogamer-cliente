import { useContext, useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row, Spinner, Table } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { numberFormat, toast } from "../../helpers";
import { httpRequest } from "../../helpers/httpRequest";

export const DetailPay = () => {

    const { id } = useParams();

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [detialPay, setDetialPay] = useState({ pay: null, user: null, products: [] });

    const { pay, user: userPay, products } = detialPay;

    const getDetail = async () => {
        try {
            const { status, data } = await httpRequest(`${import.meta.env.VITE_DETAIL_PAY}${id}`, 'GET');
            if (status === 200) {
                return setDetialPay(data.Data);
            }
            toast('error', 'Error inesperado');
        } catch (error) {
            toast('error', error);
        }

    }

    useEffect(() => {
        if (user.logged) {
            getDetail();
        }
    }, []);

    useEffect(() => {
        if (!user.logged) navigate('/')
    }, []);

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio Unitario</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (products.length === 0)
                                    ? <tr key={1}>
                                        <td><Spinner animation="border" /></td>
                                        <td><Spinner animation="border" /></td>
                                        <td><Spinner animation="border" /></td>
                                        <td><Spinner animation="border" /></td>
                                        <td><Spinner animation="border" /></td>
                                    </tr>
                                    : products.map((p, i) => (
                                        <tr key={p.id}>
                                            <td>{i + 1}</td>
                                            <td>{p.nombreProducto}</td>
                                            <td>{numberFormat(p.precio)}</td>
                                            <td>{numberFormat(p.valor)}</td>
                                            <td>{p.cantidad}</td>
                                        </tr>

                                    ))

                            }
                            {
                                (products.length > 0) && <tr key={2}><td className='d-flex justify-content-end'>Total: {numberFormat(pay.valorCompra)} </td></tr>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Información venta</Accordion.Header>
                            <Accordion.Body>
                                <p>Nombre cliente: {userPay?.nombre}</p>
                                <p>Fono: {userPay?.fono}</p>
                                <p>Correo: {userPay?.correo}</p>
                                <p>Total compra: {numberFormat(pay?.valorCompra)}</p>
                                <p>Fecha compra: {pay?.fechaCompra}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}
