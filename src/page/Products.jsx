import axios from 'axios';
import { useState,useEffect } from 'react';
 import {Container,Row,Card,Button} from 'react-bootstrap';
const url = 'http://localhost:5000/api/v0/allproduct';


export const Products = () => {

  const [product, setProduct] = useState([]);

  const listProduct = async() =>{

      const res = await axios.get(url);

      const {Data} = res.data;

      setProduct(Data)
  }

    useEffect(() => {
    listProduct();
  }, [])
  
  console.log(product)
  return (
    <>
    <Container>
        <Row>
            {product.map((pro)=> (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{pro.nombreProducto}</Card.Title>
                        <label >{pro.stock}</label>
                        <Card.Text>
                            {pro.descripcion}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <label>{pro.precio}</label>
                        <Button variant="primary">carrito</Button>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    </Container>
    </>
  )
}
