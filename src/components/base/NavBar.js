import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../actions/product";

import { useHistory, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { capitalizeText } from "../../helpers/capitalize";

export const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.product);

  const [busquedaValue, handleBusquedaChange] = useForm({busqueda: ""});
  const { busqueda } = busquedaValue;

  const handleBusqueda = (e, busqueda) => {

    e.preventDefault();

    // ? Como debería hacer el regex? 
    // ? Debo implementarlo en el back o acá?    

    if (busqueda.length !== 0) {

      const termino = capitalizeText(busqueda);
      const filtradoPorTitle = products.filter((p) =>
        p.title.includes(termino)
      );

      dispatch(searchProduct(filtradoPorTitle));
      history.push("/search");
      
    }

  };

  return (
    <Navbar variant="dark" bg="dark" className="navbar" expand="md">
      <Container fluid>
        <Navbar.Brand>
          <NavLink className="tdn" to="/">
            NotMeli
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {!name ? (
              <NavLink className="nav-link tdn " to="/login">
                Login
              </NavLink>
            ) : (
              <NavLink className="nav-link  tdn " to="/account/mi-perfil">
                Mi cuenta
              </NavLink>
            )}

            <NavLink
              className="nav-link tdn navbar__carrito"
              to="/account/carrito"
            >
              Carrito
            </NavLink>
          </Nav>
          <Form
            onSubmit={(e) => handleBusqueda(e, busqueda)}
            className="d-flex"
          >
            <FormControl
              type="search"
              className="me-2"
              placeholder="Buscar un producto"
              aria-label="Search"
              name="busqueda"
              value={busqueda}
              onChange={handleBusquedaChange}
            />
            <Button type="submit" variant="success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
