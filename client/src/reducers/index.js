import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { orderReducer } from './orderReducer';
import { productDetailsReducer } from './productDetailsReducer';
import { cartReducer } from './cartReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  product: productReducer,
  order: orderReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  auth: authReducer
});
