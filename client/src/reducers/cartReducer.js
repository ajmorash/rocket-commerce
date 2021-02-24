import { GET_CART, ADD_TO_CART, CLEAR_CART } from '../actions/types.js';
import { clone } from 'lodash';

const initialState = {
  cart: []
}

export function cartReducer(state = initialState, action){
  switch(action.type){
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      }
    case ADD_TO_CART:
      var updatedCart = [];
      var itemAlreadyAdded = false;
      var newItem = clone(action.payload.product);
      newItem.quantity = action.payload.quantity;
      console.log(newItem);

      state.cart.forEach(item => {
        if(item._id == newItem._id){
          itemAlreadyAdded = true;
        }
      });

      if(itemAlreadyAdded){
        updatedCart = state.cart.map(product => {
          if(product._id == newItem._id){
            return newItem;
          }else{
            return product;
          }
        })
      }
      else {
        updatedCart = [newItem, ...state.cart]
      }

      console.log(state.cart);
      console.log(action.payload);
      console.log(updatedCart);
      return {
        ...state,
        cart: updatedCart
      }
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
}
