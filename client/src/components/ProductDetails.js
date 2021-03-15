import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../actions/productDetailsActions';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import './styles/productDetails.css';

function ProductDetails(props) {

  const [reservedQuantity, setReservedQuantity] = useState(0);

  const onChange = (e) => {
    if(e.target.value < 0){
      setReservedQuantity(0);
    }
    else if(props.productDetails.productDetails.quantity >= e.target.value){
      setReservedQuantity(e.target.value);
    }
    else if(props.productDetails.productDetails.quantity < e.target.value){
      setReservedQuantity(props.productDetails.productDetails.quantity);
    }
  }

  const addToCart = () => {
    props.addToCart(props.productDetails.productDetails, reservedQuantity);
  }

  useEffect(() => {
    props.getProduct(props.match.params.id);
  },[]);

  if(props.productDetails.productDetails.name){
    return(
      <div className='product-details'>
        <div className='left-column'>
          <img src={props.productDetails.productDetails.imageURL} />
        </div>
        <div className='right-column'>
          <div className='product-name'>
            <h1>{props.productDetails.productDetails.name}</h1>
          </div>
          <div className='product-price'>
            <h2>${props.productDetails.productDetails.price.toFixed(2)}</h2>
          </div>
          <div className='product-description'>
            <h3>{props.productDetails.productDetails.description}</h3>
          </div>
          {props.productDetails.productDetails.height > 0 &&
          <div className='product-dimensions'>
            <h3>dimensions: {props.productDetails.productDetails.height} in. x {props.productDetails.productDetails.width} in. x {props.productDetails.productDetails.length} in.</h3>
          </div>}
          {props.productDetails.productDetails.weight > 0 &&
          <div className='product-weight'>
            <h3>weight: {props.productDetails.productDetails.weight} g</h3>
          </div>}
          {props.productDetails.productDetails.quantity > 0 &&
          <div className='product-weight'>
            <h3>Quantity Available: {props.productDetails.productDetails.quantity}</h3>
          </div>}

          <input
            type='number'
            value={reservedQuantity}
            onChange={onChange}
            />

          <button className='add-to-cart' onClick={addToCart}>
            Add to Cart
          </button>
          <br />
          <Link className = 'back-to-shop' to='/'>
            <button>Back To Shop</button>
          </Link><br />
        </div>

      </div>
    )
  } else{
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productDetails: state.productDetails
})

export default connect(mapStateToProps, { getProduct, addToCart })(ProductDetails);
