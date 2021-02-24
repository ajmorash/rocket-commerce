import { GET_ORDERS, ADD_ORDER } from '../actions/types.js';

const initialState = {
  orders: []
}

export function orderReducer(state = initialState, action){
  switch(action.type){
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.products]
      }
    default:
      return state;
  }
}
