import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  playload: item
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  playload: item
});

export const decreaseCartItem = (item) => ({
  type: CartActionTypes.DECREASE_CART_ITEM,
  playload: item
});