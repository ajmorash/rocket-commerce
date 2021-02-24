import { GET_PRODUCT } from '../actions/types.js';

const initialState = {
  productDetails: []
}

export function productDetailsReducer(state = initialState, action){
  switch(action.type){
    case GET_PRODUCT:
      return {
        ...state,
        productDetails: action.payload
      }
    default:
      return state;
  }
}
