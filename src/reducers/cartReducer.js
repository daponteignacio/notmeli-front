import { types } from "../types/types";

const initialState = { cartItems: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartProducts:
      return {
        ...state,
        cartItems: [...action.payload],
      };

    case types.deleteCart:
      return {
        ...state,
        cartItems: [],
      };

    case types.deleteCartProduct:
      return {
        ...state,
        cartItems: [...action.payload],
      };

    default:
      return state;
  }
};
