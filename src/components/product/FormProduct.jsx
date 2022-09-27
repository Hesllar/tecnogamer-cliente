import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col, Card, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { MarkList } from './MarkList';
import { CategoryList } from '../category/CategoryList';
import { useForm } from '../../hooks';
import { httpRequest, toast } from '../../helpers';
import axios from 'axios';

export const FormProduct = ({ category, mark, newProduct }) => {

  const { onInputChange, formState, onResetForm } = useForm({
    nombreProducto: '',
    stock: 0,
    precio: '',
    descripcion: '',
    categoriaId: 'Seleccione',
    marcaId: 'Seleccione',
    img: ''
  });

  const img = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();


      const img64 = await converBase64(img.current.files[0]);

      const imgName = await httpRequest(import.meta.env.VITE_URL_UPLOAD, 'CREATE', { img64 });

      if (imgName.status !== 200) {
        const { data } = imgName.response;

        toast('error', data.message || 'Error no controlado');

        return;
      }
      const { Data } = imgName.data;

      formState.img = Data.bas64;

      formState.extension = Data.extension;

      const resp = await httpRequest(import.meta.env.VITE_URL_CREATE_PRODUCT, 'CREATE', formState);

      if (resp.status !== 200) {
        const { data } = resp.response;

        toast('error', data.message || 'Error no controlado');

        onResetForm();

        return;
      }

      const { data } = resp;

      newProduct(data.Data);

      onResetForm();

      toast('success', data.message);

    } catch (error) {

      toast('error', error);
    }

  }

  const converBase64 = async (file) => {
    return new Promise((resolve, reject) => {

      let fileReade = new FileReader();

      fileReade.readAsDataURL(file);

      fileReade.onload = (() => {
        // const type = fileReade.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        const type = fileReade.result;
        resolve(type)
      });
      fileReade.onerror = ((error) => {
        reject(error)
      })
    });
  };

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
                  category.map(c => (<CategoryList key={c._id} category={c} />))
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
                  mark.map(m => (<MarkList key={m._id} mark={m} />))
                }
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Col sm="12">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type='file' onChange={onInputChange} name="img" ref={img} value={formState.img} accept="image/jpeg, image/png, image/jpg" />
            </Col>
          </Form.Group>
          <Form.Group >
            <Button type="submit" className="RegisterBoton mt-2" variant="success"  >Registrar Producto</Button>
            <Link to="/" className="linkInicio"><Button className="RegisterBoton mt-2 " style={{ marginLeft: "10px" }} variant="warning" >Cancelar</Button></Link>
          </Form.Group>

        </Form>
      </Card>
      <ToastContainer />
    </Col>

  )
}
