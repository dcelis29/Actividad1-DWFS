import React from 'react'
import '../styles/ShoppingCart.css'
import { Link } from 'react-router-dom';

export const ShoppingCart = () => {
  return (
    <div className='shopping-list'>
      <h2>Lista de compras</h2>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Valor unitario</th>
          <th>Valor Total</th>
        </tr>
        <tr>
          <a href="/product-info"><td>Articulo 1</td></a>
          <td>1</td>
          <td>$5.000 COP</td>
          <td>$5.000 COP</td>
          <td><input type="button" value="Eliminar"/></td>
        </tr>
        <tr>
        <a href="/product-info"><td>Articulo 2</td></a>
          <td>3</td>
          <td>$7.000 COP</td>
          <td>$21.000 COP</td>
          <td><input type="button" value="Eliminar"/></td>
        </tr>
        <tr>
        <a href="/product-info"><td>Articulo 3</td></a>
          <td>2</td>
          <td>$16.000 COP</td>
          <td>$32.000 COP</td>
          <td><input type="button" value="Eliminar"/></td>
        </tr>
        <tr>
          <th colSpan='3'>Total</th>
          <th>$58.000 COP</th>
        </tr>
      </table>

      <div className='buttons'>
        <Link to="/">
          <button type='button'>Sigue comprando</button>
        </Link>
        <Link to="/shopping-cart/payment">
          <button type='button'>Facturar</button>
        </Link>
      </div>
    </div>
  )
}
