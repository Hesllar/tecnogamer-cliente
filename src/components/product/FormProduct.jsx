import {Link} from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Col, Card, Row} from 'react-bootstrap';
import { MarkList } from './MarkList';
import { CategoryList } from './CategoryList';
import { useForm } from '../../hooks';

const URLPOST = 'http://localhost:8000/api/v0/registerproduct';

export const FormProduct = ({category,mark, newProduct}) => {

  const {onInputChange, formState, onResetForm} = useForm({
    nombreProducto:'',
    stock:0,
    precio:'',
    descripcion:'',
    categoriaId:'',
    marcaId:''
  });

  const handleSubmit = async(e) =>{
    
    e.preventDefault();

    const {data} = await axios.post(URLPOST,formState);

    newProduct(data.Data);

    
    onResetForm();
  }


  return (
    <Col>
        <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
          <h3 className='regtitle'>Registro</h3>
          <Form className='Formregister' onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12">
                <Form.Control onChange={onInputChange} name="nombreProducto" type="text" placeholder="Ingrese un Producto" value={formState.nombreProducto} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12">
                <Form.Control onChange={onInputChange} type="number" name="stock" placeholder="Ingrese Stock" value={formState.stock} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Col sm="12">
                <Form.Control autoComplete="true" onChange={onInputChange} name="precio" type="text" placeholder="Ingrese Precio" value={formState.precio} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Col sm="12">
                <Form.Control as='textarea' onChange={onInputChange} name="descripcion" type="text" placeholder="Descripción" value={formState.descripcion} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Col sm="12">
                <Form.Label>Categoria</Form.Label>
                <Form.Select defaultValue={formState.categoriaId} onChange={onInputChange} name="categoriaId">
                  <option value='Seleccione' disabled> Seleccione </option>
                  {
                    category.map(c => (<CategoryList key={c._id} category={c}/>))
                  }
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Col sm="12">
                <Form.Label>Marca</Form.Label>
                <Form.Select defaultValue={'Seleccione'} onChange={onInputChange} name="marcaId">
                  <option value="Seleccione" disabled> Seleccione </option>
                  {
                    mark.map(m => (<MarkList key={m._id} mark={m}/>))
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
    
  )
}
