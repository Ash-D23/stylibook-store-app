import React from 'react'
import { Outlet} from 'react-router-dom';
import { CheckoutProvider } from '../../Context';
function CheckoutPage() {

  return (
    <CheckoutProvider>
      <Outlet />
    </CheckoutProvider>
  )
}

export { CheckoutPage }