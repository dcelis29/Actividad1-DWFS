import React from 'react'
import '../styles/ProductInfo.css'

export const ProductInfo = () => {
  return (
    <div className="product-detail-img">
        <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='product-detail'>
            <h3>Nombre del producto</h3>
            <h4>Espacio para descripción corta</h4>
            <p>Espacio para descripción larga</p>
            <h4>Precio: $25.000 COP</h4>
            <button className='buttonAddShop'>Comprar</button>
        </div>
    </div>
  )
}
