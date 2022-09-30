import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { NavDropdown, Button } from 'react-bootstrap';
import { routes } from '../../routes/config-route';



export const ListCart = () => {

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

    const handleDelete = (idProduct) => {

        const upProduct = products.filter(prod => prod._id !== idProduct);

        setProducts(upProduct);

        localStorage.setItem('products', JSON.stringify(upProduct));
    }



    return (
        <NavDropdown
            id="nav-dropdown-dark-example"
            menuVariant="dark"
            title={`Producto(s) ${products.length}`}>
            {
                products.map(product => {

                    return < NavDropdown.Item key={product._id}>
                        {`Producto: ${product.nombreProducto} - Precio: ${parseInt(product.cant) * parseInt(product.precio)} - cantidad: ${product.cant}`}
                        <Button type="button" className=" btn btn-danger mt-2" onClick={() => handleDelete(product._id)}>X</Button>
                    </NavDropdown.Item>

                })

            }
            <span>
                Total: ${calTotal()}
                {(products.length > 0)
                    ? <Button as={NavLink} to={routes.home} type="Button" className=" btn btn-primary mt-2">Comprar</Button>
                    : ''}
            </span>



        </NavDropdown>
    )
}
