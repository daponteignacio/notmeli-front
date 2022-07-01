import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { Button, Card, Form } from "react-bootstrap";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "nbaguinho@gmail.com",
    lPassword: "000000",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  const handleGoBack = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="center-content">
      <div className="bg-white p-3 rounded">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="lEmail"
              value={lEmail}
              onChange={handleLoginInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="lPassword"
              value={lPassword}
              onChange={handleLoginInputChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button type="submit">Login</Button>

            <Button onClick={handleGoBack} size="sm" variant="dark">
              Volver
            </Button>
          </div>
        </Form>
        <div className="auth__links">
          <NavLink className="auth__opcion" to="/recovery">
            ¿Olvidaste tu contraseña?
          </NavLink>
          <NavLink className="auth__opcion" to="/register">
            ¿Todavía no tenes cuenta? Crea una.
          </NavLink>
        </div>
      </div>
    </div>
  );
};
