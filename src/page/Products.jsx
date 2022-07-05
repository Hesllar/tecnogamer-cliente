import axios from 'axios';
import { useState,useEffect } from 'react';
 import {Table} from 'react-bootstrap';
const url = 'http://localhost:8000/api/v0/allproduct';


export const Products = () => {

  const [product, setProduct] = useState([]);

  const listProduct = async() =>{

      const res = await axios.get(url);

      const {Data} = res.data;

      setProduct(Data)
  }

    useEffect(() => {
    listProduct();
  }, [])
  
  console.log(product)
  return (
    <>
        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((pro,index)=> (
                                    <tr key={pro._id}>
                                        <td>{pro.nombreProducto}</td>
                                        <td >{pro.stock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
    </>
  )
}
