import closeIcon from "../../img/close-icon.svg";

export const Modal = ({ children, estado, cambiarEstado, header = 'Modal' }) => {
  return (
    <>
      {estado && (
        <div className="overlay">
          <div className="modal__container">
            <div className="modal__header">
              <h3 className="modal__title">{header}</h3>

              <button
                onClick={() => cambiarEstado(false)}
                className="btn-cerrar"
              >
                <img src={closeIcon} />
              </button>
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
};
