import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../actions/product";
import { useHistory } from "react-router-dom";

export const Top5 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { categories, products } = useSelector((state) => state.product);

  const handleTop5Click = (busqueda) => {
    const filtradoPorCategoria = products.filter((p) => p.cat === busqueda);

    dispatch(searchProduct(filtradoPorCategoria));
    history.push("/search");
  };

  return (
    <div className="top5">
      <div
        onClick={() => handleTop5Click(categories[1]?._id)}
        className="top5__tarjeta"
      >
        <h3 className="top5__titulo">{categories[1]?.name}</h3>
        <img
          className="top5__imagen"
          alt="https://via.placeholder.com/200x200"
          src="https://via.placeholder.com/200x200"
        />
      </div>

      <div
        onClick={() => handleTop5Click(categories[2]?._id)}
        className="top5__tarjeta"
      >
        <h3 className="top5__titulo">{categories[2]?.name}</h3>
        <img
          className="top5__imagen"
          alt="https://via.placeholder.com/200x200"
          src="https://via.placeholder.com/200x200"
        />
      </div>

      <div
        onClick={() => handleTop5Click(categories[3]?._id)}
        className="top5__tarjeta"
      >
        <h3 className="top5__titulo">{categories[3]?.name}</h3>
        <img
          className="top5__imagen"
          alt="https://via.placeholder.com/200x200"
          src="https://via.placeholder.com/200x200"
        />
      </div>


      <div
        onClick={() => handleTop5Click(categories[10]?._id)}
        className="top5__tarjeta"
      >
        <h3 className="top5__titulo">{categories[10]?.name}</h3>
        <img
          className="top5__imagen"
          alt="https://via.placeholder.com/200x200"
          src="https://via.placeholder.com/200x200"
        />
      </div>

      <div
        onClick={() => handleTop5Click(categories[7]?._id)}
        className="top5__tarjeta"
      >
        <h3 className="top5__titulo">{categories[7]?.name}</h3>
        <img
          className="top5__imagen"
          alt="https://via.placeholder.com/200x200"
          src="https://via.placeholder.com/200x200"
        />
      </div>
    </div>
  );
};
