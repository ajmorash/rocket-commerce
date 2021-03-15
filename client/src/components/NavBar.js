import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import shoppingcart from './images/shoppingcart.png';

function NavBar(props){

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const calculateCart = () => {
    var newTotal = 0;
    var newQuantity = 0;

    console.log('cart');
    console.log(props.cart.cart);

    props.cart.cart.forEach((product) => {
      newTotal += product.price * product.reservedQuantity;
      newQuantity += parseInt(product.reservedQuantity);
    });

    setTotal(newTotal);
    setQuantity(newQuantity);
  }

  useEffect(() => {
    calculateCart();
  }, [props.cart.cart]);

  return(
    <div className = 'nav-bar'>
      <div className = 'nav-bar-content'>
        <div className='left-nav'>
          <Link to='/'>
            <div className='shoplink'>
                <h2>Shop</h2>
            </div>
          </Link>
        </div>
        <div className='right-nav'>
          <Link className='cart' to='/checkout' >
            <h1 className='cart-total'>${total.toFixed(2)} ({quantity})</h1>
              <img className = 'cart-button' src={shoppingcart} />
          </Link>
          <div className='login'>
            <h2>Log in</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { })(NavBar);
