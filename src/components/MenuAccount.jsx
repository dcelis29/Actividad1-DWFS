import React from 'react';
import '../styles/Header.css';

export const MenuAccount = () => {
  return (
    <div className="account">
        <ul>
            <a href="/my-orders"><li>Mis pedidos</li></a>
            <a href="/my-account"><li>Editar perfil</li></a>
            <a href="/"><li>Salir</li></a>
        </ul>
    </div>
  )
}
