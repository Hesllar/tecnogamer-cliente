

import { Row, Container, Col } from 'react-bootstrap';
import { UserAdminForm } from '../../../page/administrador/userSetting/UserAdminForm';
import { UserAdminList } from '../../../page/administrador/userSetting/UserAdminList';
import { userGetUser } from '../../../hooks';

export const UserAdminSetting = () => {


  const {user, setUser, setIsUpdate} = userGetUser();

  const newUser = (userAdd) =>{
    setUser(
      [...user, userAdd],
    )
  }
  
  return (
    <Container className='regcontrainer'>
      <Row className='mt-2 mb-2'>
        <Col className='col-xs-12 col-sm-12  col-md-6'>
            <UserAdminForm newUser={newUser}   /> 
            
        </Col>
        <Col className='col-xs-12 col-sm-12  col-md-6'>
            <UserAdminList  
              data={user} 
              // deleteProduct={deleteProduct} 
              // setIsUpdate={setIsUpdate}
            />
        </Col>
      </Row>
    </Container >
  )
}
