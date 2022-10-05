
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/config-route';
import logo from '../../img/tecnogamelogo.png'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import { ListCart } from '../cart/ListCart';
import { CategoryContext } from '../../context/CategoryContext';

export const Header = () => {

  let rolUser = 1;

  const { user, setUser } = useContext(UserContext);

  const { categorys } = useContext(CategoryContext);


  if (user.userData) {

    rolUser = user.userData.rol;

  }

  const logout = () => {

    localStorage.removeItem('user');

    setUser({
      logged: false
    });
  }

  useEffect(() => {

  }, [user.logged]);


  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/" ><img src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="" /> TecnoGamer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to={routes.home} >Inicio</Nav.Link>
          <Nav.Link as={NavLink} to={routes.products}>Productos</Nav.Link>
          {(user.logged && rolUser == 2) ?
            <NavDropdown
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              title='Administrador'>
              <NavDropdown.Item as={NavLink} to={`/admin${routes.addCategory}`} >Agregar Categorias</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={`/admin${routes.addMark}`} >Agregar Marcas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={`/admin${routes.addProduct}`} >Agregar Productos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={`/admin${routes.userAdmin}`} >Administrador de Usuario</NavDropdown.Item>
            </NavDropdown>
            : ''
          }
          <NavDropdown
            id="nav-dropdown-dark-example"
            menuVariant="dark"
            title='Categoria'>
            {
              (categorys.length > 0)
                ? categorys.map(cat => (<NavDropdown.Item key={cat._id} as={NavLink} to={`${routes.categorys}/${cat._id}`} >{cat.nombreCategoria}</NavDropdown.Item>))
                : ''
            }

            {/* <NavDropdown.Item as={NavLink} to={routes.gabinete} >Gabinetes</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={routes.memoria} >Memoria</NavDropdown.Item> */}
          </NavDropdown>
          <ListCart />
        </Nav>
        {(user.logged) ? <h4 className='text-muted'>{`Hola ${user.userData.nombre} ${user.userData.apellido}`}</h4> : ''}
        <Nav>

          {(!user.logged) ? <Nav.Link as={NavLink} to={routes.login} >Iniciar Sesion</Nav.Link> : ''}
          {(!user.logged) ? <Nav.Link as={NavLink} to={routes.register} >Registrarse</Nav.Link> : ''}
          {(user.logged) ? <Nav.Link onClick={logout} >Cerrar Sesion</Nav.Link> : ''}
        </Nav>


      </Navbar.Collapse>
    </Navbar >
  )
}
