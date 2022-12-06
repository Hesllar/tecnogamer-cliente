import { useEffect, useContext } from 'react';
import { Row, Container, Col, Table, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProductContext } from '../../context/ProductContext';
import { UserContext } from '../../context/UserContext';
import { httpRequest, numberFormat, toast } from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'

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

    const pay = async () => {

        try {
            const listProducts = products.map(prod => {
                return {
                    valor: parseInt(prod.precio) * prod.cant,
                    cantidad: prod.cant,
                    productoId: prod._id
                }
            });

            const order = {
                products: listProducts,
                valorCompra: calTotal(),
                fechaCompra: new Date(),
                usuarioId: user.userData._id,
                tipoPago: 'NO ACTIVO AÚN',
                estadoPago: 'NO ACTIVO AÚN',
                fechaPago: new Date(),
            }

            const resp = await httpRequest(import.meta.env.VITE_PAY, 'CREATE', order);

            if (resp.status !== 200) {
                const { data } = resp.response;

                toast('error', data.message || 'Error no controlado');

                return;
            }

            localStorage.removeItem('products');

            setProducts([]);

            const { data } = resp;

            toast('success', data.message);

        } catch (error) {
            toast('error', error);
        }



    }
    useEffect(() => {
        if (!user.logged) navigate('/')
    }, [user.logged])


    return (
        <>
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
                            (products.length > 0) && <Button className='btn btn-success' onClick={pay}>Comprar</Button>
                        }

                    </Col>
                </Row>
                <ToastContainer />
            </Container>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th >#</th>
                                    <th>Producto</th>
                                    <th>Precio Unitario</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {(products.length > 0) ? products.map((prod, i) => (
                                    <tr key={prod._id}>
                                        <td>{i + 1}</td>
                                        <td className="align-middle"><img src={`data:image/${prod.extension};base64, ${prod.img64}`} alt="IMG"  style={{ width: '50px' }}/>{prod.nombreProducto}</td>
                                        <td className="align-middle">{numberFormat(prod.precio)}</td>
                                        <td className="align-middle">
                                            <div className="input-group-btn">
                                                <FontAwesomeIcon className="restar" icon={faMinus} onClick={() => handleDelete(prod._id)} /> {prod.cant} <FontAwesomeIcon className="restar" icon={faPlus}  onClick={() => hadleAdd(prod._id)} />
                                            </div>
                                        </td>
                                        <td className="align-middle">{numberFormat(parseInt(prod.cant) * parseInt(prod.precio))}</td>
                                        <td className="align-middle"><button className="btn btn-sm btn-danger"><FontAwesomeIcon className="eliminar" icon={faTimes} /></button></td>
                                    </tr>
                                )): '' }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </>
    )
}
