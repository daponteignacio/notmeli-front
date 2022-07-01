import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useParams }                from "react-router-dom";
import { getAllCartProducts }       from "../../actions/cart";

export const ProductoFullScreen = () => {
  const { products } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.filter((e) => e._id === id);

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

  const handleAgregarCarrito = (productId) => dispatch(getAllCartProducts(productId));

  return (
    <div className="tarjeta">
      <div className="producto_contenedor">
        <img
          src="https://via.placeholder.com/300x330"
          className="producto_image"
          alt="Imagen de producto"
        />

        <div className="producto_info">
          <div>
            <h3 className="producto_titulo">{product[0]?.title}</h3>
            <h4 className="producto_precio">
              Precio: <span>${product[0]?.price}</span>
            </h4>
            <p className="producto_envio">Envio: {product[0]?.shipping}</p>
            <p className="producto_condicion">
              Estado: {product[0]?.condition ? "Nuevo" : "Usado"}
            </p>

            <label>Descripción</label>
            <p className="producto_desc">
              {product[0]?.desc ??
                "Do eiusmod ut magna ex ex qui. Incididunt incididunt aliqua excepteur anim ipsum nostrud duis aliquip nostrud minim. Cillum pariatur deserunt irure ut fugiat cillum. Et qui deserunt incididunt aliquip fugiat est ad. Quis esse aute magna nisi culpa excepteur ut fugiat nostrud."}
            </p>
          </div>

          <div className="d-flex justify-content-between">
            <button
              onClick={() => handleAgregarCarrito(product[0]?._id)}
              className="btn btn-dark"
            >
              Agregar al carrito
            </button>
            <button onClick={handleComprar} className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
