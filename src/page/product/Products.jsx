import { Link } from 'react-router-dom';
import { Container, Row, Card, Button, Col, Spinner } from 'react-bootstrap';
import { useGetProducts } from '../../hooks/useGetProducts';
import { routes } from '../../routes/config-route';
import { numberFormat } from '../../helpers'
import { addCart } from '../../helpers/addCart';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const Products = () => {

    const { products, setProducts } = useContext(ProductContext);

    const { data, isLoading } = useGetProducts();


    return (
        <>
            <Container className={(isLoading) ? 'd-flex justify-content-center' : ''}>
                {
                    (isLoading) ? (<Spinner animation="border" />)
                        : (
                            <Row className='mt-2 mb-2'>
                                {
                                    data.map(pro => (
                                        <Col key={pro._id} className='col-md-4 mt-2'>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title> {pro.nombreProducto}</Card.Title>
                                                    <strong >STOCK:<label className='fw-normal'>{pro.stock}</label></strong>
                                                </Card.Body>
                                                <Card.Img variant="top" src={pro ? `${(pro.extension.length > 0) ? `data: image / ${pro.extension};base64, ${pro.img64}` : ''}` : ''} alt='IMG' />
                                                <Card.Body>
                                                    <label>{numberFormat(parseInt(pro.precio))}</label>
                                                </Card.Body>
                                                <Button className='m-1' variant="primary" onClick={() => addCart({ ...pro, cant: 1 }, products, setProducts)}>Agregar</Button>
                                                <Link className='m-1 btn btn-primary' to={`${routes.viewProduct}/${pro._id}`} >Ver detalle</Link>
                                            </Card>
                                        </Col>
                                    ))
                                }

                            </Row>
                        )
                }


            </Container>
        </>
    )
}
