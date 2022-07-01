import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startUpdate } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const MiPerfil = () => {
  const dispatch = useDispatch();
  const { name, surname } = useSelector((state) => state.auth);

  const [formUserValues, handleUserInputChange] = useForm({
    email: "nbaguinho@gmail.com",
    nombre: "Ignacio",
    apellido: "da Ponte",
    passwordActual: "000000",
    passwordNueva: "111111",
    passwordNueva2: "111111",
  });

  const {
    nombre,
    apellido,
    email,
    passwordActual,
    passwordNueva,
    passwordNueva2,
  } = formUserValues;

  const handleActualizarPerfil = (e) => {
    e.preventDefault();

    if (passwordNueva !== passwordNueva2) {
      return Swal.fire(
        "Contraseñas distintas",
        "Las contraseñas no coinciden",
        "error"
      );
    }

    dispatch(
      startUpdate({
        name: nombre,
        email: email,
        surname: apellido,
        password: passwordActual,
        newpassword: passwordNueva,
      })
    );
  };

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);

    edit
      ? document.querySelector("fieldset").removeAttribute("disabled", "")
      : document.querySelector("fieldset").setAttribute("disabled", "");
  };

  return (
    <div className="account__main-aside">
      <div className="account__header justify-content-between">
        <h1 className="account__title">Aca se pueden editar tus datos</h1>

        <button onClick={handleEdit} className="btn btn-dark">
          Editar mis datos
        </button>
      </div>
      <div className="account__tarjeta">
        <fieldset disabled>
          <form onSubmit={(e) => handleActualizarPerfil(e)}>
            <div className="form-group row mb-3">
              <label htmlFor="nombre" className="col-sm-2 col-form-label">
                Tu nombre
              </label>
              <div className="col-sm-10">
                <input
                  name="nombre"
                  value={nombre}
                  onChange={handleUserInputChange}
                  id="nombre"
                  type="text"
                  className="form-control"
                  placeholder={name}
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="apellido" className="col-sm-2 col-form-label">
                Tu apellido
              </label>
              <div className="col-sm-10">
                <input
                  name="apellido"
                  value={apellido}
                  onChange={handleUserInputChange}
                  id="apellido"
                  type="text"
                  className="form-control"
                  placeholder={surname}
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Cambiar email
              </label>
              <div className="col-sm-10">
                <input
                  placeholder="Ingresa un correo para reemplazar el actual"
                  onChange={handleUserInputChange}
                  name="email"
                  value={email}
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="passwordActual"
                className="col-sm-2 col-form-label"
              >
                Cambiar password
              </label>
              <div className="col-sm-10">
                <input
                  onChange={handleUserInputChange}
                  name="passwordActual"
                  value={passwordActual}
                  type="password"
                  className="form-control"
                  placeholder="Primero ingresa tu password actual"
                  id="passwordActual"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="passwordNueva"
                className="col-sm-2 col-form-label"
              >
                Nueva password
              </label>
              <div className="col-sm-10">
                <input
                  onChange={handleUserInputChange}
                  name="passwordNueva"
                  value={passwordNueva}
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu nueva password"
                  id="passwordNueva"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="passwordNueva2"
                className="col-sm-2 col-form-label"
              >
                Confirmar password
              </label>
              <div className="col-sm-10">
                <input
                  onChange={handleUserInputChange}
                  name="passwordNueva2"
                  value={passwordNueva2}
                  type="password"
                  className="form-control"
                  placeholder="Confirma tu nueva password"
                  id="passwordNueva2"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10"></div>
            </div>

            <button type="submit" className="btn btn-success">
              Guardar cambios
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};
