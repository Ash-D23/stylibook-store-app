import React, {useState, useEffect} from 'react';
import CartProducts from '../../Components/CartProducts/CartProducts';
import CartCheckout from '../../Components/CartCheckout/CartCheckout';
import './CartManagementPage.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext/CartContext';
import { toasterror } from '../../Utilities/ToastMessage';

function CartManagementPage() {

  const { cartitems } = useCart()

  const navigate = useNavigate()

  const navigatetocheckout = () => {
    if(cartitems?.length === 0){
      toasterror("No items in Cart")
      return
    }
    navigate('/checkout')
  }

  return (
    <div className="checkout">
      <CartProducts />
      <CartCheckout label={"Checkout"} nextpath={navigatetocheckout} />
    </div>
  )
}

export default CartManagementPage