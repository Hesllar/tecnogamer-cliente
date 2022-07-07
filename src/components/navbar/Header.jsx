
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/config-route';
import logo from '../../img/tecnogamelogo.png'

export const Header = () => {
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
          <Nav.Link as={NavLink} to={routes.addProduct}>Crear Producto</Nav.Link>
          <NavDropdown
            id="nav-dropdown-dark-example"
            menuVariant="dark"
            title='Categoria'>
            <NavDropdown.Item as={NavLink} to={routes.mouseTeclado} >Mouse y Teclados</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={routes.gabinete} >Gabinetes</NavDropdown.Item>
            <NavDropdown.Item left as={NavLink} to={routes.memoria} >Memoria</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to={routes.login} >Iniciar Sesion</Nav.Link>
          <Nav.Link as={NavLink} to={routes.register} >Registrarse</Nav.Link>
          <Nav.Link  >Cerrar Sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
