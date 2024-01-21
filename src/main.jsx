import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClothingApp } from './ClothingApp';
import { CartProvider } from './clothing/state/cartContext';
import './assets/css/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/ecomerce-site'>
    <CartProvider>
      <ClothingApp />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
