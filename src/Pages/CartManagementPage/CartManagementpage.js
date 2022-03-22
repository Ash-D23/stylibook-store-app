import React, {useState, useEffect} from 'react';
import CartProducts from '../../Components/CartProducts/CartProducts';
import CartCheckout from '../../Components/CartCheckout/CartCheckout';
import './CartManagementPage.css';

function CartManagementPage() {

  return (
    <div className="checkout">
      <CartProducts />
      <CartCheckout label={"Checkout"} nextpath={"/checkout"} />
    </div>
  )
}

export default CartManagementPage