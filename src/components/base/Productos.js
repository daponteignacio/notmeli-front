import { useDispatch } from "react-redux";
import { createCartProduct } from "../../actions/cart";
import { createFavProduct, deleteFavProduct } from "../../actions/favs";
import favicon from "../../img/fav-icon.svg";
import filter from "../../img/filter-icon.svg";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Productos = ({ productos, estado, cambiarEstado }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAgregarCarrito = (e, productId) =>
    dispatch(createCartProduct(productId));

  const handleFavs = (e, productId) => {
    // ! SI EL PRODUCTO SE ENCUENTRA EN EL ARREGLO DE FAVS, SE AGREGA LA CLASE FAVEADO

    const faveado = e.currentTarget.classList.contains("faveado");

    if (!faveado) {
      dispatch(createFavProduct(productId));
      e.currentTarget.classList.add("faveado");
    } else {
      dispatch(deleteFavProduct(productId));
      e.currentTarget.classList.remove("faveado");
    }
  };

  const handleTitleClick = (productId) => history.push(`/product/${productId}`);

  return (
    <div className="account__main-aside account__main-aside--margin0">
      <div onClick={() => cambiarEstado(!estado)} className="filter__button">
        <h3>Filtros</h3>
        <img src={filter} />
      </div>

      <div className="account__grilla-productos">
        {productos?.map((values) => {
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
                    onClick={(e) => handleAgregarCarrito(e, values?._id)}
                    className="btn btn-dark"
                  >
                    Agregar al carrito
                  </Button>
                  <img
                    onClick={(e) => handleFavs(e, values?._id)}
                    className="producto__favoritos"
                    src={favicon}
                  />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
