import React from 'react';
import { CartProducts, CartCheckout } from '../../Components';
import './CartManagementPage.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context';
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
      <CartCheckout label={"Checkout"} nextpath={navigatetocheckout} showApplyCoupon={true} />
    </div>
  )
}

export { CartManagementPage } ;