import { Container, Row, Card, Button, Col, Spinner  } from 'react-bootstrap';
import { useGetProducts } from '../hooks/useGetProducts';


export const Products = () => {

    const {data, isLoading} = useGetProducts();
    
    return (
        <>
            <Container className={ (isLoading) ? 'd-flex justify-content-center':''}>
                {
                    (isLoading) ? (<Spinner animation="border" />)
                                :   (
                                        <Row className='mt-2 mb-2'>
                                        {
                                            data.map( pro => (
                                                <Col key={pro._id} className='col-md-4 mt-2'>
                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Body>
                                                            <Card.Title> {pro.nombreProducto}</Card.Title>
                                                            <strong >STOCK:<label className='fw-normal'>{pro.stock}</label></strong>
                                                        </Card.Body>
                                                        <Card.Img variant="top" src="holder.js/100px180" />
                                                        <Card.Body>
                                                            <label>${pro.precio}</label>
                                                        </Card.Body>
                                                        <Button className='m-1' variant="primary">carrito</Button>
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
