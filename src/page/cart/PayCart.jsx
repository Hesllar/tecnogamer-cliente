import { useEffect } from 'react';
import { useContext } from 'react';
import { Row, Container, Col, Table, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { UserContext } from '../../context/UserContext';
import { numberFormat } from '../../helpers';

export const PayCart = () => {

    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const { products, setProducts } = useContext(ProductContext);

    const calTotal = () => {
        let sum = 0;
        let total = 0;
        for (const p of products) {
            sum = p.cant * parseInt(p.precio)
            total += sum;
        }

        return total;
    }

    const hadleAdd = (idProduct) => {

        const newData = products.map(p => {

            if (p._id === idProduct) {
                p.cant += 1;
            }

            return p;

        });

        localStorage.setItem('products', JSON.stringify(newData));

        return setProducts(newData);
    }

    const handleDelete = (idProduct) => {

        const newData = products.map(p => {
            if (p._id === idProduct) {
                p.cant -= 1
            }
            return p;

        });

        const newData2 = newData.filter(p2 => p2.cant > 0);

        localStorage.setItem('products', JSON.stringify(newData2));
        return setProducts(newData2);
    }

    useEffect(() => {
        if (!user.logged) navigate('/')
    }, [user.logged])


    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='text-center'>
                                <th >#</th>
                                <th>Producto</th>
                                <th>Precio Unitario</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(products.length > 0)
                                ? products.map((prod, i) => (
                                    <tr key={prod._id}>
                                        <td>{i + 1}</td>
                                        <td><Row><Col>{prod.nombreProducto}</Col><Col><img className="d-block w-50" src={`data:image/${prod.extension};base64, ${prod.img64}`} alt="IMG" /></Col></Row></td>
                                        <td>{numberFormat(prod.precio)}</td>
                                        <td>{numberFormat(parseInt(prod.cant) * parseInt(prod.precio))}</td>
                                        <td className='d-flex justify-content-between'><Button className='btn btn-primary' onClick={() => handleDelete(prod._id)}>-</Button> {prod.cant}<Button className='btn btn-primary' onClick={() => hadleAdd(prod._id)}>+</Button> </td>
                                    </tr>
                                ))
                                : ''
                            }
                            <tr><td className='d-flex justify-content-end'>Total: {numberFormat(calTotal())} </td></tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end'>
                    {
                        (products.length > 0) && <Button className='btn btn-success'>Comprar</Button>
                    }

                </Col>
            </Row>
        </Container>
    )
}
