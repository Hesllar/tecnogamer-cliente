import {Link} from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Col, Card, Row} from 'react-bootstrap';
import { MarkList } from './MarkList';
import { CategoryList } from '../category/CategoryList';
import { useForm } from '../../hooks';


const URLPOST = 'http://localhost:8000/api/v0/registerproduct';

export const FormProduct = ({category,mark, newProduct}) => {

  const {onInputChange, formState, onResetForm} = useForm({
    nombreProducto:'',
    stock:0,
    precio:'',
    descripcion:'',
    categoriaId:'Seleccione',
    marcaId:'Seleccione'
  });

  const handleSubmit = async(e) =>{
    try {
      e.preventDefault();

      const {data} = await axios.post(URLPOST,formState);

      newProduct(data.Data);

      onResetForm();
      
    } catch (error) {

      console.log(error)
    }
   
  }


  return (
    <Col>
        <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
          <h3 className='regtitle'>Registro de Producto</h3>
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
                <Form.Select onChange={onInputChange} name="categoriaId" value={formState.categoriaId}>
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
                <Form.Select onChange={onInputChange} name="marcaId" value={formState.marcaId}>
                  <option value="Seleccione" disabled> Seleccione </option>
                  {
                    mark.map(m => (<MarkList key={m._id} mark={m}/>))
                  }
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group >
              <Button type="submit" className="RegisterBoton mt-2" variant="success"  >Registrar Producto</Button>
              <Link to="/" className="linkInicio"><Button  className="RegisterBoton mt-2 " style={{marginLeft: "10px"}} variant="warning" >Cancelar</Button></Link>
            </Form.Group>
    
          </Form>
        </Card>
      </Col>
    
  )
}
