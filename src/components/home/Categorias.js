import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { searchProduct } from "../../actions/product";

export const Categorias = () => {
  const { categories, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleBusqueda = (e, busqueda) => {
    e.preventDefault();

    const filtradoPorCategoria = products.filter((p) => p.cat === busqueda);

    dispatch(searchProduct(filtradoPorCategoria));
    history.push("/search");
  };



  return (
    <div className="grilla-categorias">
      {categories?.map((value) => {
        return (
          <NavLink
            to="search"
            style={{ textDecoration: "none", color: "black" }}
            key={value?._id}
            className="categoria"
            onClick={(e) => handleBusqueda(e, value._id)}
          >
            {value?.name}
          </NavLink>
        );
      })}
    </div>
  );
};
