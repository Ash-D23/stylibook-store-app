import React from 'react'
import CartCheckout from '../../Components/CartCheckout/CartCheckout';
import {AddressProvider} from '../../Context/AddressContext/AddressContext';
import AddressManagement from '../../Components/Addressmanagement/Addressmanagement'
import { useNavigate } from 'react-router-dom';

function SelectAddressPage() {

  const navigate = useNavigate()

  const navigatetoorder = () => navigate("/checkout/ordersummary")
  
  return (
    <div className="checkout">
        <AddressProvider>
            <AddressManagement />
        </AddressProvider>
        <CartCheckout label={"View Order"} nextpath={navigatetoorder} />
    </div>
  )
}

export default SelectAddressPage