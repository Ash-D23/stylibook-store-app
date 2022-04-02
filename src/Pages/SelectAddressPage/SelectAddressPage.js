import React from 'react'
import { AddressProvider, useCheckout } from '../../Context';
import { AddressManagement, CartCheckout } from '../../Components';
import { useNavigate } from 'react-router-dom';
import { toasterror } from '../../Utilities/ToastMessage';

function SelectAddressPage() {

  const navigate = useNavigate()

  const { selectedAddress } = useCheckout();

  const navigatetoorder = () => {
    if(!selectedAddress){
      toasterror('Please select an address')
      return 
    }
    navigate("/checkout/ordersummary")
  }
  
  return (
    <div className="checkout">
        <AddressProvider>
            <AddressManagement />
        </AddressProvider>
        <CartCheckout label={"View Order"} nextpath={navigatetoorder} />
    </div>
  )
}

export { SelectAddressPage }