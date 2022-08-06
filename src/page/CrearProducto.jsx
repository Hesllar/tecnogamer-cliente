

import { Row, Container,Col } from 'react-bootstrap';
import { FormProduct } from '../components/product/FormProduct';
import { ProductsList } from '../components/product/ProductsList';
import { useGetCategory, useGetMarks, useGetProducts } from '../hooks';

export const CrearProducto = () => {

  //Lista de categorias
  const {category} = useGetCategory();

  //Lista de marcas
  const {mark} = useGetMarks();

  const {data, isLoading, setProduct} = useGetProducts();

  const newProduct = (products) =>{
    setProduct({
      data:[...data, products],
      isLoading:false
    })
  }

  const deleteProduct = (id) =>{
    
    const newData = data.filter( p => p._id !== id);

    setProduct({
      data: newData,
      isLoading:false
    });

  }

  return (
    <Container className='regcontrainer'>
      <Row className='mt-2 mb-2'>
        <FormProduct category={category} mark={mark} newProduct={newProduct}/>
        <ProductsList data={data} isLoading={isLoading} deleteProduct={deleteProduct}/>
      </Row>
    </Container >
  )
}
