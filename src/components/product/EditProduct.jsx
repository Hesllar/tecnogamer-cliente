import { useEffect } from 'react'
import {Modal,Form,Button,Col,Card,Row} from 'react-bootstrap'
import axios from 'axios';
import { useForm } from '../../hooks';
import { CategoryList } from '../category/CategoryList';
import { MarkList } from './MarkList';

export const EditProduct = ({isOpen,close,value,mark,category, setIsUpdate}) => {

    const {onInputChange,formState,onResetForm} = useForm({
        nombreProducto:value.nombreProducto,
        stock:value.stock,
        precio:value.precio,
        descripcion:value.descripcion,
        categoriaId:value.categoriaId[0]._id,
        marcaId:value.marcaId[0]._id,
    });    

    useEffect(()=>{
        if(!isOpen){
            onResetForm()
        }
    },[isOpen])

    const handleUpdate = async(e) => {

        e.preventDefault();

        await axios.put(`http://localhost:8000/api/v0/updateproduct/${value._id}`, formState);

        setIsUpdate(true);

        close();
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header > 
                <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Col className="mt-3">
                <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
                    <Form onSubmit={handleUpdate} >
                        <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            <Form.Control 
                                name="nombreProducto" 
                                type="text" 
                                placeholder="Ingrese un Producto" 
                                value={formState.nombreProducto} 
                                onChange={onInputChange} 
                                required
                            />
                        </Col>
                        </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            <Form.Control 
                                type="number" 
                                name="stock" 
                                placeholder="Ingrese Stock" 
                                value={formState.stock} 
                                onChange={onInputChange} 
                                required 
                            />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Control 
                                autoComplete="true" 
                                name="precio" 
                                type="text" 
                                placeholder="Ingrese Precio" 
                                value={formState.precio} 
                                onChange={onInputChange} 
                                required 
                            />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Control 
                                as='textarea' 
                                name="descripcion" 
                                type="text" 
                                placeholder="Descripción" 
                                value={formState.descripcion} 
                                onChange={onInputChange} 
                                required 
                            />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select  name="categoriaId" onChange={onInputChange}  value={formState.categoriaId}>
                                <option value="Seleccione" disabled> Seleccione </option>
                                {
                                    category.map(c => (<CategoryList key={c._id} category={c}/>))
                                }
                            </Form.Select>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Label>Marca</Form.Label>
                            <Form.Select name="marcaId"  onChange={onInputChange} value={formState.marcaId} >
                                <option value="Seleccione" disabled> Seleccione </option>
                                {
                                    mark.map(m => (<MarkList key={m._id} mark={m}/>))
                                }
                            </Form.Select>
                        </Col>
                        </Form.Group> 
                        <Form.Group >
                            <Button  type="submit" className="RegisterBoton mt-2" variant="success"  >Actualizar Producto</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Col>
        </Modal>
        
    )
}
