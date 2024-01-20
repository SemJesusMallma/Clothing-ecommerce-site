import React, { useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { getProductDetailsById } from '../data/productService';
import { addToCart } from '../helpers/cartHelpers';

export const DetailsProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const productDetails = getProductDetailsById(id)

  if (!productDetails) {
    return <p>Producto no encontrado</p>
  }

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [notification, setNotification] = useState('')
  const [notificationClass, setNotificationClass] = useState('')

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setSelectedQuantity(Number(event.target.value))
  }

  const addToCartHelper = (event) => {
    event.preventDefault()
    addToCart(productDetails, selectedSize, selectedQuantity, navigate, setNotification, setNotificationClass)
  }

  return (
    <main className="container shadow">
      <div className="polo">
            <img className="polo__image" src={productDetails.image} alt={productDetails.name} />
            <div className="polo__content">
                <div className="content__text">
                <h3>{productDetails.name}</h3>
                <p>{productDetails.description}</p>
                <p className="product__price">{productDetails.price}</p>
                </div>
                
                <form className="formProduct">
                    <select className="formProduct__field" name="size" value={selectedSize} onChange={handleSizeChange}>
                    <option value="" disabled>-- Seleccionar Talla --</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>

                    <input className="formProduct__field" type="number" placeholder="Cantidad" min="1" step="1" value={selectedQuantity} onChange={handleQuantityChange} />
                    <button className="formProduct__submit" onClick={addToCartHelper}>Agregar al Carrito</button>
                </form>
            </div>
        </div>
        <div className={`notification ${notificationClass}`}>{notification}</div>
    </main>
  )
}

export default DetailsProductPage;