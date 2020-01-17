import CartActionTypes from './cart.types';
import { addItemToCart, decreaseCartItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.playload)
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => (cartItem.id !== action.playload.id))
      };
    case CartActionTypes.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.playload)
      };
    default:
      return state;
  }
};

export default cartReducer;