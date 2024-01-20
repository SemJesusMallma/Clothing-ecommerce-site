export const addToCart = (productDetails, selectedSize, selectedQuantity, navigate, setNotification, setNotificationClass) => {
    if (!selectedSize) {
      setNotification('Por favor, selecciona una talla antes de agregar al carrito.')
      setNotificationClass('show')
      
      setTimeout(() => {
        setNotification('')
        setNotificationClass('')
      }, 3000)
      
      return
    }
  
    const currentCart = JSON.parse(localStorage.getItem('cartItems')) || []
    const isProductInCart = currentCart.some((item) => item.id === productDetails.id)
  
    if (!isProductInCart) {
      const updatedCart = [...currentCart, { ...productDetails, size: selectedSize, quantity: selectedQuantity }]
      localStorage.setItem('cartItems', JSON.stringify(updatedCart))
      navigate('/carrito')
    } else {
      setNotification('Este producto ya se encuentra en el carrito')
      setNotificationClass('show')
    }
  
    setTimeout(() => {
      setNotification('')
      setNotificationClass('')
    }, 2000)
  }
  