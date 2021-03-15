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
        <div>{item.name}</div>
        <div>{item.price}</div>
        {
          editToggle ?
          <input
            type='number'
            value={reservedQuantity}
            onChange={onChange}
            />
          : <div>{reservedQuantity}</div>
        }
        <button onClick={() => {editQuantity(item._id)}}>
          {editToggle ?
            "Save"
            : "Edit Quantity"
          }


        </button>
        <button onClick={() => {removeItem(item._id)}}> Remove Item </button>
      </div>
    )
}

const mapStateToProps = (state) => ({
  //cart:
})

export default connect(mapStateToProps, {removeFromCart, addToCart})(CheckoutItem);
