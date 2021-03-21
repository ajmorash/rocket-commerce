import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import shoppingcart from './images/shoppingcart.png';
import { logout } from '../actions/authActions';

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

  const logout = () => {
    props.logout();
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
          { props.auth.isAuthenticated ?
          <div>
            <Link to='/'>
              <div className='shoplink'>
                  <h2>Add Products</h2>
              </div>
            </Link>
            <Link to='/'>
              <div className='shoplink'>
                  <h2>View Orders</h2>
              </div>
            </Link>
          </div> : ''
        }

        </div>
        <div className='right-nav'>
          <Link className='cart' to='/checkout' >
            <h1 className='cart-total'>${total.toFixed(2)} ({quantity})</h1>
              <img className = 'cart-button' src={shoppingcart} />
          </Link>
          {props.auth.isAuthenticated ? 
            <div>
              <h2>Welcome {props.auth.user.name}</h2>
              <button onClick={logout}>Logout</button>
            </div>
            : <Link to='/login'>
            <div className='login'>
              <h2>Log in/Register</h2>
            </div>
          </Link>
          }

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavBar);
