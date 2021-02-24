import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/NavBar.css';

function NavBar(props){

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const calculateCart = () => {
    var newTotal = 0;
    var newQuantity = 0;

    console.log('cart');
    console.log(props.cart.cart);

    props.cart.cart.forEach((product) => {
      newTotal += product.price * product.quantity;
      newQuantity += parseInt(product.quantity);
    });

    setTotal(newTotal);
    setQuantity(newQuantity);
  }

  useEffect(() => {
    calculateCart();
  }, [props.cart.cart]);

  return(
    <div className = 'nav-bar'>
      <div className = 'cart'>
        <h1>${total.toFixed(2)} ({quantity})</h1>
        <button>
          Checkout
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { })(NavBar);
