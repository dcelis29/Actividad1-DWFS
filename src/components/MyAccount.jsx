import React from 'react';
import '../styles/MyAccount.css';

export const MyAccount = () => {
  return (
    <div className="my-account">
    <div className="account-container">
      <h1 className="title">Editar cuenta</h1>
      <form action="#" className="form">
        <div>
          <label for="name" className="label">Nombre</label>
          <p className="value">Diego Celis</p>
          <label for="email" className="label">Correo</label>
          <p className="value">correo@mail.com</p>
          <label for="password" className="label">Contraseña</label>
          <p className="value">*********</p>
        </div>
        <input type="submit" value="Edit" className="secondary-button login-button" />
      </form>
    </div>
  </div>
  )
}
