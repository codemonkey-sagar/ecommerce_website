import { createContext, useReducer } from 'react';
import cartReducer from './CartReducer';

const CartContext = createContext();

const initialState = {
  cart: [],
};

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const adjustQuantity = (id, quantity) => {
    dispatch({ type: 'ADJUST_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, adjustQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
