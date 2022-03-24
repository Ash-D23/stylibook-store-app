import React, {useState, useEffect} from 'react';
import CartProducts from '../../Components/CartProducts/CartProducts';
import CartCheckout from '../../Components/CartCheckout/CartCheckout';
import './CartManagementPage.css';
import { useNavigate } from 'react-router-dom';

function CartManagementPage() {

  const navigate = useNavigate()

  const navigatetocheckout = () => navigate('/checkout')

  return (
    <div className="checkout">
      <CartProducts />
      <CartCheckout label={"Checkout"} nextpath={navigatetocheckout} />
    </div>
  )
}

export default CartManagementPage