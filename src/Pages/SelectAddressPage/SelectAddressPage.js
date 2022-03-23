import React from 'react'
import CartCheckout from '../../Components/CartCheckout/CartCheckout';
import {AddressProvider} from '../../Context/AddressContext/AddressContext';
import AddressManagement from '../../Components/Addressmanagement/Addressmanagement'

function SelectAddressPage() {
  return (
    <div className="checkout">
        <AddressProvider>
            <AddressManagement />
        </AddressProvider>
        <CartCheckout label={"View Order"} nextpath={"/checkout/ordersummary"} />
    </div>
  )
}

export default SelectAddressPage