export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(cartItem => (cartItem.id === cartItemToAdd.id));

  if(existingCartItems) {
    return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id) ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const decreaseCartItem = (cartItems, cartItemToDecrease) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id);

  if(existingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
  }

  return cartItems.map(cartItem => (cartItem.id === cartItemToDecrease.id) ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
};





// export const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

//   if(existingCartItems) {
//     const itemIndexToRemove = cartItems.findIndex(cartItem => cartItem.id === cartItemToRemove.id);
//     return cartItems.splice(itemIndexToRemove, 1);
//   }

// };