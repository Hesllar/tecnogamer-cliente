import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Col, Card, Row, Container } from 'react-bootstrap';
export const CrearProducto = () => {

  const urlCategoria = 'http://localhost:8000/api/v0/allcategory';
  const urlMarca = 'http://localhost:8000/api/v0/allmark';

  const [category, setCategory] = useState([]);
  const [marca, setMarca] = useState([]);

  const listCategory = async () => {

    const resCategory = await axios.get(urlCategoria);
    const resMarca = await axios.get(urlMarca);

    const { Data: dataCategory } = resCategory.data;
    const { Data: dataMarca } = resMarca.data;

    setCategory(dataCategory)
    setMarca(dataMarca)
  }


  useEffect(() => {
    listCategory();
  }, [])
  return (
    <Container className='regcontrainer'>
      <Row className='mt-2 mb-2'>
        <Col>
          <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
            <h3 className='regtitle'>Registro</h3>
            <Form className='Formregister'>
              <Form.Group as={Row} className="mb-3">
                <Col sm="12">
                  <Form.Control onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Ingrese un Producto" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm="12">
                  <Form.Control onChange={(e) => setCorreo(e.target.value)} type="number" placeholder="Ingrese Stock" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Col sm="12">
                  <Form.Control autoComplete="true" onChange={(e) => setContrasena(e.target.value)} type="text" placeholder="Ingrese Precio" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Col sm="12">
                  <Form.Control as='textarea' onChange={(e) => setRepcontrasena(e.target.value)} type="text" placeholder="Descripción" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Col sm="12">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Select defaultValue={'Seleccione'}>
                    <option value="Seleccione" disabled> Seleccione </option>
                    {
                      category.map(c => (
                        <option key={c._id} value={c._id}> {c.nombreCategoria} </option>)
                      )
                    }
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" >
                <Col sm="12">
                  <Form.Label>Marca</Form.Label>
                  <Form.Select defaultValue={'Seleccione'}>
                    <option value="Seleccione" disabled> Seleccione </option>
                    {
                      marca.map(m => (
                        <option key={m._id} value={m._id}> {m.nombreMarca} </option>)
                      )
                    }
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group>
                <Link to="/" className="linkInicio">&larr; Volver Al Inicio</Link>
              </Form.Group>
              <Form.Group>
                <Button type="submit" className="RegisterBoton mt-2" variant="primary" >Registrarse</Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}
