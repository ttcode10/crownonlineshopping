import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { selectCartItems } from './../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';
import CartItem from './../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    {(cartItems.length > 0) ? (
        <div className='cart-items-container'>
          <div className='cart-items'>
            { cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem} />)) }
          </div>
          <CustomButton
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartHidden());
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        </div>
      ) : (
        <span className='error-message'> Your cart is empty </span>
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);