import { GET_PRODUCTS, ADD_PRODUCT } from '../actions/types.js';

const initialState = {
  products: []
}

export function productReducer(state = initialState, action){
  switch(action.type){
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    default:
      return state;
  }
}
