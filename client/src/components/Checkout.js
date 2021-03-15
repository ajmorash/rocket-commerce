import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './styles/Checkout.css';
import {Link} from 'react-router-dom';

import { removeFromCart, addToCart } from '../actions/cartActions';

import CheckoutItem from './CheckoutItem.js';

function Checkout(props){

  const itemList2 = (
    <div className = 'cart-container'>
    <Link to='/'>
      <button> Back to Shop </button>
    </Link>
    {props.cart.cart.map((item) =>
      <CheckoutItem item={item}/>
    )}
    </div>
  )

  useEffect(()=> {
    console.log(props.cart);
  },[]);

  return(
    <div className = 'checkout-container'>
      <div className = 'cart-row'>
        <div className = 'cart-col'>
        </div>
      </div>
      {itemList2}
      <button>Confirm Order</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, {removeFromCart, addToCart})(Checkout);
