import axios from 'axios';
import { GET_PRODUCTS,  ADD_PRODUCT } from './types';

export const getProducts = () => dispatch => {
  axios
    .get('/api/products')
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}

// export const addProduct = product => dispatch {
//
// }
