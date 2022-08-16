import { useEffect,useState } from 'react'
import {Modal,Form,Alert,Button} from 'react-bootstrap'
import { useForm } from '../../hooks';
import { CategoryList } from '../category/CategoryList';

export const EditProduct = ({isOpen,close,value, mark, category}) => {

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
  

//   return (

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
    
//   )
}
