export const addDecimal = (num) => {
  return Math.round(num * 100) / 100;
};

export const updateCart = (state) => {
  // Product price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Shipping price
  state.shippingPrice = addDecimal(state.itemsPrice > 1000 ? 0 : 10);

  // Tax (13%)
  state.taxPrice = addDecimal(Number((0.13 * state.itemsPrice).toFixed(2)));

  // Total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // Adding to the local storage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
