import { types } from '../types/types';

const initialState = { 
    products: [],
    productSearch: [],
    oneProduct: [],
    categories: [],
}

export const productReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.productAll:
            return {
                ...state,
                products: action.payload
            }

        case types.productSearch:
            return {
                ...state,
                productSearch: action.payload
            }

        case types.productOne: 
            return {
                ...state,
                oneProduct: action.payload
            }

        case types.productCategories:
            return {
                ...state ,
                categories: action.payload
            }

        default:
            return state;
    }

}


