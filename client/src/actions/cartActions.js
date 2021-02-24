import { ADD_TO_CART,  CLEAR_CART } from './types';

export const addToCart = (product, quantity) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: product,
      quantity: quantity
    }
  });
}

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  });
}
