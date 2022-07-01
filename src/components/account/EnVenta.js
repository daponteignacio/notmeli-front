import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../actions/product";
import { NavLink } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const EnVenta = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { products } = useSelector((state) => state.product);
  const { uid } = useSelector((state) => state.auth);

  const myProducts = products.filter((e) => e.user === uid);

  const handleEliminarProducto = (id) => dispatch(deleteProduct(id));
  const handleTitleClick = (productId) => history.push(`/product/${productId}`);


  return (
    <div className="account__main-aside">
      <div className="account__header account__header--space-between">
        <h1 className="account__title">Tus publicaciones</h1>
        <NavLink to="/account/vender">
          <button className="btn btn-dark">Crear publicación</button>
        </NavLink>
      </div>

      <div className="account__grilla-productos">
        {myProducts?.map((values) => {
          return (
            <Card key={values?._id}>
              <Card.Img
                variant="top"
                alt="Imagen de producto"
                src="https://via.placeholder.com/300x200"
              />
              <Card.Body>
                <Card.Title
                  onClick={() => handleTitleClick(values?._id)}
                  style={{ cursor: "pointer" }}
                >
                  {values?.title}
                </Card.Title>

                  <Card.Text className="producto__label">
                    Precio:{" "}
                    <span className="producto__valor">${values?.price}</span>
                  </Card.Text>

                  <Card.Text className="producto__label producto__label--envio">
                    Envío:
                    <span className="producto__valor"> ${values?.shipping}</span>
                  </Card.Text>

                  <div className="producto__botones">
                  <Button
                    onClick={() => handleEliminarProducto(values?._id)}
                    variant="dark"
                  >
                    Eliminar producto
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
