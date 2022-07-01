import { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from "../../actions/auth";

import fav from "../../img/fav-icon.svg";
import sell from "../../img/sell-icon.svg";
import image from "../../img/user-pic.jpg";
import acc from "../../img/account-icon.svg";
import pay from "../../img/payment-icon.svg";
import goback from "../../img/back-icon.svg";
import carrito from "../../img/cart-icon.svg";
import bought from "../../img/bought-icon.svg";
import logout from "../../img/logout-icon.svg";
import selling from "../../img/selling-icon.svg";

export const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => dispatch(startLogout()); 
  const handleGoBack = () => history.push("/");


  const [close, setClose] = useState(false);

  return (
    <>
      <nav
        onClick={() => setClose(!close)}
        className={`account__aside sidebar ${close ? "" : "close"}`}
      >
        <header>
          <div className="image-text">
            <span className="image">
              <img src={image} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">{name}</span>
              <span className="profession">Cuenta</span>
            </div>
          </div>

          <div className="toggle"></div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <NavLink className="tdn" to="/account/carrito">
                  <img src={carrito} className="icon" />

                  <span className="text nav-text">Carrito</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink className="tdn" to="/account/mi-perfil">
                  <img src={acc} className="icon" />

                  <span className="text nav-text">Mi Perfil</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink className="tdn" to="/account/vender">
                  <img src={sell} className="icon" />

                  <span className="text nav-text">Vender</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink className="tdn" to="/account/medios-pago">
                  <img src={pay} className="icon" />

                  <span className="text nav-text">Pago</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink className="tdn" to="/account/mis-publicaciones">
                  <img src={selling} className="icon" />

                  <span className="text nav-text">En venta</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink className="tdn" to="/account/favoritos">
                  <img src={fav} className="icon" />

                  <span className="text nav-text">Favoritos</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink className="tdn" to="/account/mis-compras">
                  <img src={bought} className="icon" />

                  <span className="text nav-text">Mis compras</span>
                </NavLink>
              </li>
            </ul>
            <li className="navlink">
              <a href="#">
                <img
                  src={goback}
                  onClick={handleGoBack}
                  className="icon volver"
                />
                <span className="text nav-text">Volver</span>
              </a>
            </li>

            <li className="navlink">
              <a href="#">
                <img
                  src={logout}
                  onClick={handleLogout}
                  className="icon salir"
                />
                <span className="text nav-text">Salir</span>
              </a>
            </li>
          </div>

        </div>
      </nav>
    </>
  );
};
