import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../actions/product";

export const Filters = ({ estado, cambiarEstado }) => {
  const { categories, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleFiltrar = (filtros) => {

    dispatch(filterProducts(filtros, products));
    cambiarEstado(!estado);
  };

  // ! RESET FILTERS!!!!!

  return (
    <div>
      <Formik
        initialValues={{
          desde: "",
          hasta: "",
          condicion: "",
          categoria: "",
        }}
        onSubmit={(values) => handleFiltrar(values)}
      >
        {({ values }) => (
          <Form>
            <label className="form-label">Precio</label>
            <div className="d-flex gap-2 w-75 mb-3">
              <Field
                name="desde"
                type="number"
                placeholder="Desde"
                className="form-control"
              />
              <Field
                name="hasta"
                type="number"
                placeholder="Hasta"
                className="form-control"
              />
            </div>

            <div role="group" aria-labelledby="my-radio-group">
              <label className="form-label" id="my-radio-group">
                Condición
              </label>
              <div className="d-flex gap-5 align-items-center w-75 mb-3">
                <label className="form-check-label">
                  Nuevo
                  <Field
                    className="form-check-input ms-2"
                    type="radio"
                    name="condicion"
                    value="nuevo"
                  />
                </label>
                <label className="mt-0 form-check-label">
                  Usado
                  <Field
                    className="form-check-input ms-2"
                    type="radio"
                    name="condicion"
                    value="usado"
                  />
                </label>
              </div>
            </div>

            <label className="form-label">Categoría</label>

            <Field className="form-select mb-3" as="select" name="categoria">
              {categories.map((cat) => (
                <option key={cat?._id} value={cat?._id}>
                  {cat?.name}
                </option>
              ))}
            </Field>

            <button className="btn btn-primary mt-3" type="submit">
              Aplicar filtros
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
