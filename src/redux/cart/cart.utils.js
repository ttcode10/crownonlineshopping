export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log('111utils', cartItems, cartItemToAdd)
  const existingCartItems = cartItems.find(
    cartItem => (cartItem.id === cartItemToAdd.id)
  );

  if(existingCartItems) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};


export const decreaseCartItem = (cartItems, cartItemToDecrease) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToDecrease.id
  );

  if(existingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToDecrease.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  );
};
