import { useState, useEffect } from 'react';

const useCartItems = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    setCartItems(storedCartItems)
  }, [])

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return { cartItems, setCartItems, removeFromCart, getTotalItems  }
}

export default useCartItems;
