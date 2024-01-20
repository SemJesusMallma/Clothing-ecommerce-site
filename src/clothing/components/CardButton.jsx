import React from 'react';
import useCart from '../hooks/useCart';

export const CartButton = () => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart
  }

  return (
    <button onClick={handleAddToCart}>Agregar al Carrito</button>
  )
}

export default CartButton;
