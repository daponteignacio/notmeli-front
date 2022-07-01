import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../actions/product";
import { useForm } from "../../hooks/useForm";

export const Vender = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);

  const { categories } = useSelector((state) => state.product);

  const [formProductValues, handleProductInputChange] = useForm({
    desc: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una g",
    title: "Galaxy S22 ULTRA",
    price: 1234,
    shipping: 321,
    cat: "6283c6ce75bd4d8fff93d90b",
  });

  const { title, price, shipping, desc, cat } = formProductValues;

  const handleCheck = () => {
    setChecked(!checked);
    console.log(checked);
  };

  const handleCrearProducto = (e) => {
    e.preventDefault();

    dispatch(
      createProduct({
        title,
        price,
        shipping,
        desc,
        condition: checked,
        cat,
      })
    );
  };

  return (
    <div className="account__main-aside">
      <div className="account__header">
        <h1 className="account__title">Crea una publicación</h1>
      </div>
      <div className="account__tarjeta">
        <form onSubmit={handleCrearProducto}>
          <div className="form-group row mb-3">
            <label htmlFor="titulo" className="col-sm-2 col-form-label">
              Título
            </label>
            <div className="col-sm-10">
              <input
                name="title"
                value={title}
                onChange={handleProductInputChange}
                id="titulo"
                type="text"
                className="form-control"
                placeholder="Título del producto"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="precio" className="col-sm-2 col-form-label">
              Precio
            </label>
            <div className="col-sm-10">
              <input
                name="price"
                value={price}
                onChange={handleProductInputChange}
                type="number"
                className="form-control"
                id="precio"
                placeholder="Ingresa el precio del producto"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="envio" className="col-sm-2 col-form-label">
              Envío
            </label>
            <div className="col-sm-10">
              <input
                name="shipping"
                value={shipping}
                onChange={handleProductInputChange}
                type="number"
                className="form-control"
                id="envio"
                placeholder="Ingresa el valor del envío"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="desc" className="col-sm-2 col-form-label">
              Descripción
            </label>
            <div className="col-sm-10">
              <textarea
                name="desc"
                value={desc}
                onChange={handleProductInputChange}
                className="form-control"
                style={{height: '100px'}}
                id="desc"
              />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="cat" className="col-sm-2 col-form-label">
              Categoría
            </label>
            <div className="col-sm-10">
              <select
                name="cat"
                value={cat}
                onChange={handleProductInputChange}
                className="form-control"
                id="cat"
              >
                <option disabled>Seleccione una categoría</option>
                {categories.map((cat) => (
                  <option key={cat?._id} value={cat?._id}>
                    {cat?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="form-group mb-4">
            <div className="row">
              <label htmlFor="envio" className="col-sm-2 col-form-label">
                ¿Es usado?
              </label>

              <div className="col-sm-10">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="condition">
                    Si
                  </label>

                  <input
                    name="checked"
                    checked={checked}
                    onChange={handleCheck}
                    className="form-check-input"
                    type="checkbox"
                    id="condition"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-success">
                Crear publicación
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
