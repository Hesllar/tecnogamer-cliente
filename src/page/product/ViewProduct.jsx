import { useState, useEffect } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imagen3 from '../../img/home/imagen3.png';
import {httpRequest} from '../../helpers/httpRequest';

export const ViewProduct = () => {
  
  const [detail, setDetail] = useState({});

  const {id} = useParams();

  const detailProduct = async() =>{
    const {data, status} = await httpRequest(`${import.meta.env.VITE_URL_GET_BY_PRODUCT}${id}`, 'GET');
    if(status === 200){
      return setDetail(data.Data);
    }
    
    return setDetail({});
  }

  useEffect(() => {
    detailProduct();
  }, [])
  
  return (
    <Container>
      <Row>
        <Col>
          <div className="card">
            <div className="card-body">
              <img className="d-block w-100" src={imagen3} alt="IMG" />
            </div>
          </div>
        </Col>
        <Col>
        <h1>Caracteristicas</h1>
        <h2>Nombre Producto: {detail.nombreProducto}</h2>
        </Col>
      </Row>
    </Container>
  )
}
