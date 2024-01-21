import React from 'react';
import useCartItems from '../hooks/useCartItems';

export const CartPage = () => {
  const { cartItems, setCartItems, removeFromCart } = useCartItems()

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    )

    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  }

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )

    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  }

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId)
  }

  return (
    <>
      <div className="container shadow">
        <h2>Carrito de Compras</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className='selectproduct'>
              <img className="selectproduct__image" src={item.image} alt={item.name} />
              <div className="selectproduct__content">
                <div className="selectproduct__text">
                  <h3>{item.name}</h3>
                  <p className="selectproduct__price">Precio: {item.price}</p>
                  <p>Talla: {item.size}</p>
                  
                  <div className="quantity__buttons">
                    <button className='quantity__edit' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    <p>Cantidad: {item.quantity}</p>
                    <button className='quantity__edit' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  </div>
                  <img
                    src={'img/trash.svg'}
                    alt="Eliminar"
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="icon__eliminar"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CartPage;  
