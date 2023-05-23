import React from 'react';
import '../styles/Product.css';
import { Link } from 'react-router-dom';

export const Product = ({product}) => {
  return (
    <div className="product-item">
        <a href="/product-info"><img src={product.images[0]} alt={product.title} /></a>
        <div className="product-info">
            <div>
                <a href='/product-info'>{product.title}</a>
                <a href ='/product-info'><h5>${product.price}</h5></a>
                <Link to="/shopping-cart">
                  <button type='button' className='buttonAddShop'>Comprar</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
