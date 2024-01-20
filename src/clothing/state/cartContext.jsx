import React, { createContext, useReducer } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [])

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
    default:
      return state;
  }
}

export { CartProvider, useCart };
