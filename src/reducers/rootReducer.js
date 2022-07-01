import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { favsReducer } from './favsReducer';
import { productReducer } from './productReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    favs: favsReducer
})

