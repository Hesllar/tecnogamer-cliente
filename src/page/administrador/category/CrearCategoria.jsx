import { Container, Row} from 'react-bootstrap';
import {AddCategory} from '../../../components/category/AddCategory';
import { CategoryListTable } from '../../../components/category/CategoryListTable';
import { useGetCategory } from '../../../hooks';

export const CrearCategoria = () => {

  const {category, setCategory} = useGetCategory();

  const addCate = (newCategory) =>{
    setCategory([...category, newCategory]);
  }

  const deleteCategory = (deleteCate) =>{
    const newArray = category.filter(c => c._id !== deleteCate);
    setCategory(newArray);
  }

  return (
    <Container className='regcontrainer'>
      <Row className='mt-2 mb-2'>
        <AddCategory addCate={addCate}/>
        <CategoryListTable category={category} deleteCategory={deleteCategory}/>
      </Row>
    </Container >
  )
}
