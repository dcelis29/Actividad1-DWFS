import React from 'react';
import '../styles/MyOrders.css'

export const MyOrders = () => {
  return (
    <div className="my-order">
			<div className="title-container">				
				<h2>Mi orden</h2>
			</div>
			<div className="my-order-content">
				
				<div className="order">
					<p>Tu pedido con código 123456 Llegará en 3 días</p>
				</div>
			</div>
		</div>
  )
}
