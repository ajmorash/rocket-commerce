import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { removeFromCart, addToCart } from '../actions/cartActions';

function CheckoutItem({item, removeFromCart, addToCart}){

    const [reservedQuantity, setReservedQuantity] = useState(item.reservedQuantity);
    const [editToggle, setEditToggle] = useState(false);

    const editQuantity = () => {
      if(editToggle){
        addToCart(item, reservedQuantity);
      }
      setEditToggle(!editToggle);
      console.log(editToggle);
    }


    const removeItem = (id) => {
      console.log(id);
      removeFromCart(id);
    }

    const onChange = (e) => {
      if(e.target.value < 0){
        setReservedQuantity(0);
      }
      else if(item.quantity >= e.target.value){
        setReservedQuantity(e.target.value);
      }
      else if(item.quantity < e.target.value){
        setReservedQuantity(item.quantity);
      }
    }


    return (
      <div className = 'cart-row'>
        <div className='cart-item-name'>{item.name}</div>
        <div className='cart-item-price'>{item.price}</div>
        {
          editToggle ?
          <input
            className = 'cart-item-quantity-input'
            type='number'
            value={reservedQuantity}
            onChange={onChange}
            />
          : <div className = 'cart-item-quantity'>{reservedQuantity}</div>
        }
        <button className = 'cart-item-edit-quantity' onClick={() => {editQuantity(item._id)}}>
          {editToggle ?
            "Save"
            : "Edit Quantity"
          }


        </button>
        <button className = 'cart-item-remove' onClick={() => {removeItem(item._id)}}> Remove Item </button>
      </div>
    )
}

const mapStateToProps = (state) => ({
  //cart:
})

export default connect(mapStateToProps, {removeFromCart, addToCart})(CheckoutItem);
