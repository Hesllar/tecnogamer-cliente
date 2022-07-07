import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
const url = 'http://localhost:8000/api/v0/allproduct';


export const Products = () => {

    const [product, setProduct] = useState([]);

    const listProduct = async () => {

        const res = await axios.get(url);

        const { Data } = res.data;

        setProduct(Data)
    }

    useEffect(() => {
        listProduct();
    }, [])


    return (
        <>
            <Container>
                <Row className='mt-2 mb-2'>
                    {product.map((pro) => (
                        <Col key={pro._id} className='col-md-4 '>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title> {pro.nombreProducto}</Card.Title>
                                    <strong >STOCK:<label className='fw-normal'>{pro.stock}</label></strong>
                                </Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <label>${pro.precio}</label>
                                </Card.Body>
                                <Button variant="primary">carrito</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
