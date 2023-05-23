import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MyAccount } from '../components/MyAccount';
import {ShoppingCart } from '../components/ShoppingCart';
import { Payment } from '../components/Payment';
import { PaymentInfo } from '../components/PaymentInfo';
import { MyOrders } from '../components/MyOrders';
import { ProductInfo } from '../components/ProductInfo';
import { Default } from '../Pages/Default';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route exact path ="/" element ={<Home />}/>
                <Route exact path ="/my-account" element ={<MyAccount />}/>
                <Route exact path ="/shopping-cart" element ={<ShoppingCart />}/>                
                <Route exact path ="/shopping-cart/payment" element ={<Payment />}/>
                <Route exact path ="/shopping-cart/payment-info" element ={<PaymentInfo />}/>
                <Route exact path ="/my-orders" element ={<MyOrders />}/>
                <Route exact path ="/product-info" element ={<ProductInfo />}/>
                <Route exact path ="*" element ={<Default />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
