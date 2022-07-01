import Swal from "sweetalert2";

export const AgregarTarjetaForm = () => {
  const handleComprar = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "No funciona",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }


  return (
    <>
      <form className="form">
        <label>Numero de tarjeta</label>
        <input
          className="formulario__input"
          type="number"
          placeholder="xxxx-xxxx-xxxx-xxxx"
          autoComplete="none"
        />

        <label>Nombre de la tarjeta</label>
        <input
          className="formulario__input"
          type="text"
          placeholder="Ingresa tal cual esta en la tarjeta"
          value={"Ignacio da Ponte"}
          autoComplete="none"
        />

        <label>Fecha de vencimiento</label>
        <input className="formulario__input" type="date" autoComplete="none" />

        <label>Codigo de seguridad</label>
        <input
          className="formulario__input"
          type="number"
          placeholder="Ingresa los 3 numeros de seguridad"
          value={"Ignacio"}
          autoComplete="none"
        />

        <button
          onClick={(e) => handleComprar(e)}
          className="btn btn-success mt-4"
        >
          Gurdar tarjeta
        </button>
      </form>
    </>
  );
};
