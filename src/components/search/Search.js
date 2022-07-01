import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../base/Modal";
import { Productos } from "../base/Productos";
import { Filters } from "./Filters";

export const Search = () => {
  const { productSearch } = useSelector((state) => state.product);
  const [estadoModal, setEstadoModal] = useState(false);

  return (
    <div className="search">
      <Modal
        estado={estadoModal}
        header={"Filtros de búsqueda"}
        cambiarEstado={setEstadoModal}
      >
        <Filters cambiarEstado={setEstadoModal} estado={estadoModal} />
      </Modal>
      <Productos
        estado={estadoModal}
        cambiarEstado={setEstadoModal}
        productos={productSearch}
      />
    </div>
  );
};
