import React from 'react';
import { connect } from 'react-redux';

import { addItem, decreaseCartItem, removeCartItem } from './../../redux/cart/cart.action'

import './checkout-item.styles.scss';

const checkoutItem = ({cartItem, addItem, decreaseCartItem, removeCartItem}) => {
  const {imageUrl, name, quantity, price} = cartItem;

  return (
    <div className='checkout-item'>
      <img className='image-container' src={imageUrl} alt='item'/>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => removeCartItem(cartItem)}>
        &#x2715;
      </span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item)),
  decreaseCartItem: (item) => dispatch(decreaseCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(checkoutItem);