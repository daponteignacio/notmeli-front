import Swal from "sweetalert2";
import {
  fetchCreateFavProduct,
  fetchDeleteFavProduct,
  fetchEmptyFavs,
  fetchGetAllFavProducts,
} from "../helpers/fetchFavs";
import { types } from "../types/types";

// FAVS CRUD

export const createFavProduct = (productId) => {
  return async (dispatch) => {
    const resp = await fetchCreateFavProduct("favs/save-favs", productId);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.favsProducts,
        payload: body.favs,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const getAllFavProducts = () => {
  return async (dispatch) => {
    const resp = await fetchGetAllFavProducts("favs");
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.favsProducts,
        payload: body.favs,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const deleteFavProduct = (productId) => {
  return async (dispatch) => {
    const resp = await fetchDeleteFavProduct(
      "favs/delete-single-fav",
      productId
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.deleteFavProduct,
        payload: body.favs,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const emptyFavs = () => {
  return async (dispatch) => {
    const resp = await fetchEmptyFavs("favs/delete-favs");
    const body = await resp.json();

    if (body.ok) {
      dispatch({ type: types.deleteFavs });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
