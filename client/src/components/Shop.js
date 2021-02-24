import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions.js';
import PropTypes from 'prop-types';
import './styles/shop.css';
import { Link } from 'react-router-dom';

function Shop(props) {

  useEffect(() => {
      props.getProducts();
  }, []);

  var shopTiles = []

  if(props.product.products.length > 0){
    console.log(props.product.products);
    shopTiles = props.product.products.map((product) =>
      (
        <div>
          <Link to={`/products/${product._id}`}>
            <div key={product._id} className='shop-tile'>
              <div className='shop-tile-image'>
                <img src={product.imageURL} />
              </div>
              <div className='shop-tile-details'>
                <div className='shop-tile-name'>
                  <strong>{product.name}</strong>
                </div>
                <div className='shop-tile-price'>
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    );
  }


  return(
    <div className='shop'>
      {shopTiles}
    </div>
  );

}

const mapStateToProps = (state) => ({
  product: state.product
})

export default connect(mapStateToProps, { getProducts })(Shop);
