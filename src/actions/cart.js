import Swal from "sweetalert2";
import {
  fetchCreateCartProduct,
  fetchDeleteProductCart,
  fetchEmptyCart,
  fetchGetAllCartProducts,
} from "../helpers/fetchCart";
import { types } from "../types/types";

// CART CRUD

export const createCartProduct = (productoId) => {
  return async (dispatch) => {
    const resp = await fetchCreateCartProduct("cart/save-cart", productoId);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.cartProducts,
        payload: body.cart,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const getAllCartProducts = () => {
  return async (dispatch) => {
    const resp = await fetchGetAllCartProducts("cart");
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.cartProducts,
        payload: body.cart,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const deleteProductCart = (productoId) => {
  return async (dispatch) => {
    const resp = await fetchDeleteProductCart(
      "cart/delete-single-cart",
      productoId
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.deleteCartProduct,
        payload: body.cart,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const emptyCart = () => {
  return async (dispatch) => {
    const resp = await fetchEmptyCart("cart/delete-cart");
    const body = await resp.json();

    if (body.ok) {
      dispatch({ type: types.deleteCart });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
