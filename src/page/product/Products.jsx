import { Link } from 'react-router-dom';
import { Container, Row, Card, Button, Col, Spinner } from 'react-bootstrap';
import { useGetProducts } from '../../hooks/useGetProducts';
import { routes } from '../../routes/config-route';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { numberFormat } from '../../helpers'

export const Products = () => {

    const { products, setProducts } = useContext(ProductContext);

    const { data, isLoading } = useGetProducts();

    const addCart = (product) => {


        const getBod = JSON.parse(localStorage.getItem('products')) || [];


        for (const iterator of getBod) {

            if (iterator._id === product._id) {

                const cant = iterator.cant + 1;

                if (getBod.length === 1) {


                    const addArray = [{ ...product, cant }];

                    setProducts(addArray);

                    localStorage.setItem('products', JSON.stringify(addArray));

                    return;
                }

                for (const iterator2 of products) {

                    if (iterator2._id === product._id) {

                        iterator2.cant = cant;

                        setProducts([...products]);

                        localStorage.setItem('products', JSON.stringify([...products]));

                        return;
                    }
                }


            }

        }

        setProducts([...products, product]);

        localStorage.setItem('products', JSON.stringify([...products, product]));

    }



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
                                                <Button className='m-1' variant="primary" onClick={() => addCart({ ...pro, cant: 1 })}>carrito</Button>
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
