import { types } from "../types/types";

const initialState = { favsItems: [] };

export const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.favsProducts:
      return {
        ...state,
        favsItems: [...action.payload],
      };

    case types.deleteFavs:
      return {
        ...state,
        favsItems: [],
      };

    case types.deleteFavProduct:
      return {
        ...state,
        favsItems: [...action.payload],
      };

    default:
      return state;
  }
};
