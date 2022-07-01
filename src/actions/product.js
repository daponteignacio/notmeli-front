import { prettyDOM } from "@testing-library/react";
import Swal from "sweetalert2";
import {
  fetchCreateProduct,
  fetchDeleteProduct,
  fetchGetAllCategories,
  fetchGetAllProducts,
  fetchGetOneProductById,
  fetchGetOneProductByText,
} from "../helpers/fetchProducts";
import { types } from "../types/types";

// *PRODUCT CRUD
export const createProduct = (productInfo) => {
  return async (dispatch) => {
    const resp = await fetchCreateProduct("product/new-product", productInfo);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.productAll,
        payload: body.productos,
      });

      Swal.fire("Creado", "Producto creado correctamente", "success");
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    const resp = await fetchGetAllProducts("product/get-product");
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.productAll,
        payload: body.productos,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const getOneProductById = (productId) => {
  return async (dispatch) => {
    const resp = await fetchGetOneProductById("product/get-product", productId);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.productOne,
        payload: body.producto,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const getOneProductByText = (searchText, key = "title") => {
  return async (dispatch) => {
    const resp = await fetchGetOneProductByText(
      "product/get-product",
      searchText,
      key
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.productSearch,
        payload: body.productos,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const resp = await fetchDeleteProduct(`product/${productId}`);
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.productAll,
        payload: body.productos,
      });

      Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

// ADICIONALES

export const searchProduct = (productos) => {
  return async (dispatch) => {
    dispatch({
      type: types.productSearch,
      payload: productos,
    });
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    const resp = await fetchGetAllCategories("product/getCategories");
    const body = await resp.json();

    if (body.ok) {
      dispatch({
        type: types.productCategories,
        payload: body.categorias,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const filterProducts = (
  { desde, hasta, condicion, categoria },
  productSearch
) => {
  return async (dispatch) => {
    let productsFiltered = productSearch;

    if (desde.length !== 0) productsFiltered = productsFiltered.filter((p) => p.price >= desde);
    if (hasta.length !== 0) productsFiltered = productsFiltered.filter((p) => p.price <= hasta);
    
    if (categoria.length !== 0) productsFiltered = productsFiltered.filter((p) => p.cat === categoria);

    if (condicion.length !== 0) {
      if (condicion === "nuevo")
        productsFiltered = productsFiltered.filter((p) => p.condition === true);
      if (condicion === "usado")
        productsFiltered = productsFiltered.filter(
          (p) => p.condition === false
        );
    }


    dispatch({
      type: types.productSearch,
      payload: productsFiltered,
    });
  };
};
