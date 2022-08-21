import { useEffect,useState } from 'react'
import {Modal,Form,Alert,Button,Col,Card,Row} from 'react-bootstrap'
import { useForm } from '../../hooks';
import {Link,useNavigate} from 'react-router-dom';
import { CategoryList } from '../category/CategoryList';
import { MarkList } from './MarkList';

export const EditProduct = ({isOpen,close,value,mark,category}) => {
   
    const {register,formState,onResetForm} = useForm();
    const [name, setName] = useState(value.nombreProducto);
    const [stock, setStock] = useState(value.stock);
    const [precio, setPrecio] = useState(value.precio);
    const [descripcion, setDescripcion] = useState(value.descripcion);
    const [cat, setCat] = useState(value.categoriaId);
    const [marka, setMarka] = useState(value.marcaId);
    const navigate = useNavigate();    
    console.log(mark);
    useEffect(()=>{
        if(!isOpen){
            onResetForm()
        }
    },[isOpen])

    const handleSubmit = (e) => {
        // e.preventDefault();
        // updateEmployee(id, updatedEmployee)
    }

      
// const [cat, setCat] = useState([]);
//   const [mak, setMak] = useState([]);

//   const filterArrayCate = () =>{
//     if(value){
//       setCat(category.filter(c => c._id !== value.categoriaId[0]._id));
//     }
//   }

//   const filterArrayMark = () =>{
//     if(value){
//       setMak(mark.filter(c => c._id !== value.marcaId[0]._id));
//     }
//   }
  

//   const {onInputChange, formState, onResetForm} = useForm({
//     nombreProducto:(value) ? value.nombreProducto : '',
//     stock:0,
//     precio:'',
//     descripcion:'',
//   });

//   const handleUpdate = (e) =>{
//     e.preventDefault();
//     console.log(formState);
//   }

//   useEffect(()=>{
//     if(!isOpen){
//       onResetForm();
//     }
//   },[isOpen])

//   useEffect(() => {
//     filterArrayCate();
//     filterArrayMark();
//   }, [isOpen])
  

  return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header > 
                <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Col className="mt-3">
                <Card id="cardregister" style={{ maxWidth: '400px' }} className=" mx-auto p-2 ">
                    <Form onSubmit={handleSubmit} >
                        <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            <Form.Control name="name" type="text" placeholder="Ingrese un Producto" value={name} onChange={(e)=> setName(e.target.value)} required/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            <Form.Control type="number" name="stock" placeholder="Ingrese Stock" value={stock} onChange={(e)=> setStock(e.target.value)} required />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Control autoComplete="true" name="precio" type="text" placeholder="Ingrese Precio" value={precio} onChange={(e)=> setPrecio(e.target.value)} required />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Control as='textarea' name="descripcion" type="text" placeholder="Descripción" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)} required />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" >
                        <Col sm="12">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select  name="cat"  defaultValue={cat[0]._id} onChange={(e)=> setCat(e.target.value)}  >
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
                            <Form.Select name="marka"  defaultValue={marka[0]._id} onChange={(e)=> setMarka(e.target.value)} >
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
//     <Modal show={isOpen} onHide={close}>
//         <Modal.Header > 
//             <Modal.Title>Editar Usuario</Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleUpdate}>
//         <Modal.Body>
//               <Form.Group>
//                 <Form.Label>Nombre Producto</Form.Label>
//                 <Form.Control 
//                   className="mt-1"
//                   placeholder="Nombre Producto"
//                   name='nombreProducto'
//                   value={formState.nombreProducto}
//                   onChange={onInputChange}
//                   type="text"
//                 /> 

//                 <Form.Label>Stock</Form.Label>
//                 <Form.Control 
//                   className="mt-1"
//                   placeholder="Ingrese Stock"
//                   name='stock'
//                   value={(value) ? value.stock : 0}
//                   onChange={onInputChange}
//                   type="number"
//                 /> 
              
//                 <Form.Label>Precio</Form.Label>
//                 <Form.Control 
//                   className="mt-1"
//                   placeholder="Ingrese Precio"
//                   name='precio'
//                   value={(value) ? value.precio : ''}
//                   onChange={onInputChange}
//                   type="text"
//                 /> 

//                 <Form.Label>Descripción</Form.Label>
//                 <Form.Control 
//                   as='textarea' 
//                   onChange={onInputChange} 
//                   name="descripcion" 
//                   type="text" 
//                   placeholder="Descripción"
//                   className="mt-1"
//                   value={(value) ? value.descripcion : ''}
//                 />

//                 <Form.Label>Categoria</Form.Label>
//                 <Form.Select defaultValue={(value) ? value.categoriaId[0]._id : 'Seleccione'} onChange={onInputChange} name="categoriaId">
//                   <option value='Seleccione' disabled> Seleccione </option>
//                   <option value={(value) ? value.categoriaId[0]._id : ''}> {(value) ? value.categoriaId[0].nombreCategoria : ''} </option>
//                   {
//                     cat.map(c => (<CategoryList key={c._id} category={c}/>))
//                   }
//                 </Form.Select>

//                 <Form.Label>Marca</Form.Label>
//                 <Form.Select defaultValue={(value) ? value.marcaId[0]._id : 'Seleccione'} onChange={onInputChange} name="marcaId">
//                   <option value='Seleccione' disabled> Seleccione </option>
//                   <option value={(value) ? value.marcaId[0]._id : ''}> {(value) ? value.marcaId[0].nombreMarca : ''} </option>
//                   {
//                     mak.map(c => (<CategoryList key={c._id} category={c}/>))
//                   }
//                 </Form.Select>
              
//               </Form.Group>
            
//         </Modal.Body>
//         <Modal.Footer >
//             <Button  variant="secondary" onClick={close} >Cancelar</Button>
//             <Button type="submit" variant="primary">Actualizar Mi Cuenta </Button>
//         </Modal.Footer>
//       </Form>
//     </Modal>
    
  )
}
