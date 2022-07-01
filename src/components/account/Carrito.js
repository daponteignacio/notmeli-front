import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {
  deleteProductCart,
  emptyCart,
  getAllCartProducts,
} from "../../actions/cart";

export const Carrito = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    if (uid) {
      dispatch(getAllCartProducts());
    }
  }, []);

  const handleQuitarCarrito = (productId) =>
    dispatch(deleteProductCart(productId));
  const handleVaciarCarrito = () => dispatch(emptyCart());
  const handleComprar = () =>
    Swal.fire({
      title: "No funciona",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

  const handleTitleClick = (productId) => history.push(`/product/${productId}`);


  return (
    <div className="account__main-aside">
      {cartItems.length !== 0 ? (
        <div className="account__header account__header--space-between">
          <h1 className="account__title">Este es tu carrito</h1>
          <div className="account__botones">
            <button onClick={handleComprar} className="btn btn-success">
              Comprar todo
            </button>
            <button onClick={handleVaciarCarrito} className="btn btn-danger">
              Vaciar carrito
            </button>
          </div>
        </div>
      ) : (
        <h1 className="account__title">El carrito esta vacío</h1>
      )}

      <div className="account__grilla-productos">
        {cartItems?.map((values) => {
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
                    onClick={() => handleQuitarCarrito(values?._id)}
                    variant="dark"
                  >
                    Eliminar del carrito
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
