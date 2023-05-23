import React from 'react'
import '../styles/Payment.css'
import { Link } from 'react-router-dom'

export const Payment = () => {
  return (
        <div className="invoice-container">
      <div className="invoice-content">
        <h2>Datos de facturación:</h2>
        
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        
        <div className="invoice-buttons">
          <div>
            Regresar
          </div>
          <div>
            <Link to = "/shopping-cart/payment-info">
              <button type='button'> Pagar </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="invoice-sidebar">
        <h3>Pedido:</h3>
        <div className="invoice-item">
          <div className="invoice-article">
            <h4>Artículo 1</h4>
            <span>: $5.000 COP</span>
          </div>
          <div className="invoice-article">
            <h4>Artículo 2</h4>
            <span>: $21.000 COP</span>
          </div>
          <div className="invoice-article">
            <h4>Artículo 3</h4>
            <span>: $32.000 COP</span>
          </div>
        </div>
      </div>
    </div>
  )
}
