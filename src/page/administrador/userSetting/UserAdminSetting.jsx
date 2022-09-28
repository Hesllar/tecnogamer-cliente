

import { Row, Container, Col } from 'react-bootstrap';
import { UserAdminForm } from '../../../page/administrador/userSetting/UserAdminForm';
import { UserAdminList } from '../../../page/administrador/userSetting/UserAdminList';

export const UserAdminSetting = () => {



  return (
    <Container className='regcontrainer'>
      <Row className='mt-2 mb-2'>
        <Col className='col-xs-12 col-sm-12  col-md-6'>
            <UserAdminForm />
        </Col>
        <Col className='col-xs-12 col-sm-12  col-md-6'>
            <UserAdminList />
        </Col>
      </Row>
    </Container >
  )
}
