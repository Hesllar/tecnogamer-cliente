
import {Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {routes}  from '../../routes/config-route';

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand  to="/"><img 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to={routes.home} >Inicio</Nav.Link>

          <Nav.Link as={NavLink} to={routes.products}>Productos</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link  >Iniciar Sesion</Nav.Link>
          <Nav.Link  >Registrarse</Nav.Link> 
          <Nav.Link  >Cerrar Sesion</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}
