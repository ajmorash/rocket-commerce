import axios from 'axios';
import {  GET_PRODUCT } from './types';

export const getProduct = (id) => dispatch => {
  axios
    .get(`/api/products/${id}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}
