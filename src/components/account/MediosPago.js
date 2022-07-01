import { useState } from "react";
import { Modal } from "../base/Modal";
import addIcon from "../../img/add-icon.svg";
import { AgregarTarjetaForm } from "./AgregarTarjetaForm";

export const MediosPago = () => {
  const [estadoModal, setEstadoModal] = useState(false);

  return (
    <div className="account__main-aside">
      <div className="account__header">
        <h1 className="account__title">Tus tarjetas</h1>
      </div>
      <div className="pago">
        <div className="pago__tarjeta naranja">
          <h3 className="pago__banco">
            Naranja<span className="pago__num-tarjeta">5351</span>
          </h3>

          <div className="pago__botones">
            <div className="pago__acciones">
              <p className="pago__eliminar">Eliminar</p>
              <p className="pago__modificar">Modificar</p>
            </div>
            <h4 className="pago__emisora visa">Visa</h4>
          </div>
        </div>

        <div className="pago__tarjeta frances">
          <h3 className="pago__banco">
            BBVA Francés<span className="pago__num-tarjeta">5351</span>
          </h3>

          <div className="pago__botones">
            <div className="pago__acciones">
              <p className="pago__eliminar">Eliminar</p>
              <p className="pago__modificar">Modificar</p>
            </div>
            <h4 className="pago__emisora visa">Visa</h4>
          </div>
        </div>

        <div className="pago__agregar" onClick={() => setEstadoModal(true)}>
          <div className="agregar">
            <img className="agregar__svg" src={addIcon} />
            <h3 className="agregar__text">Agregar medio de pago</h3>
          </div>
        </div>
      </div>

      <Modal estado={estadoModal} header={'Agregar una tarjeta'} cambiarEstado={setEstadoModal}>
        <AgregarTarjetaForm />
      </Modal>
    </div>
  );
};
