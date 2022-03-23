import React from 'react'
import CartCheckout from '../../Components/CartCheckout/CartCheckout';
import {AddressProvider} from '../../Context/AddressContext/AddressContext';
import AddressManagement from '../../Components/Addressmanagement/Addressmanagement'

function SelectAddressPage() {
  return (
    <>
        <AddressProvider>
            <AddressManagement />
        </AddressProvider>
        <CartCheckout label={"View Order"} nextpath={"/checkout/ordersummary"} />
    </>
  )
}

export default SelectAddressPage