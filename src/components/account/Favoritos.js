import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteFavProduct,
  emptyFavs,
  getAllFavProducts,
} from "../../actions/favs";

export const Favoritos = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { favsItems } = useSelector((state) => state.favs);
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    if (uid) {
      dispatch(getAllFavProducts());
    }
  }, []);

  const handleQuitarFavorito = (id) => dispatch(deleteFavProduct(id));
  const handleTitleClick = (productId) => history.push(`/product/${productId}`);
  const handleVaciarFavoritos = () => dispatch(emptyFavs());

  return (
    <div className="account__main-aside">
      {favsItems.length !== 0 ? (
        <div className="account__header account__header--space-between">
          <h1 className="account__title">Estos son tus favoritos</h1>
          <div>
            <button className="btn btn-danger" onClick={handleVaciarFavoritos}>
              Vaciar favoritos
            </button>
          </div>
        </div>
      ) : (
        <h1 className="account__title">No hay favoritos</h1>
      )}

      <div className="account__grilla-productos">
        {favsItems?.map((values) => {
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
                    onClick={() => handleQuitarFavorito(values?._id)}
                    className="btn btn-dark"
                  >
                    Eliminar de favoritos
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
