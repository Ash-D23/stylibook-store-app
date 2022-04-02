import React from 'react'
import { Routes, Route} from 'react-router-dom';
import { CheckoutProvider } from '../../Context';
import { SelectAddressPage } from '../SelectAddressPage/SelectAddressPage';
import { OrderSummaryPage } from '../OrderSummaryPage/OrderSummaryPage';
import { OrderSuccessPage } from '../OrderSuccessPage/OrderSuccessPage';

function CheckoutPage() {

  return (
    <CheckoutProvider>
      <>
        <Routes>
          <Route path='/' element={<SelectAddressPage />} />
          <Route path='/ordersummary' element={<OrderSummaryPage />} />
          <Route path='/ordersuccess' element={<OrderSuccessPage />} />
        </Routes>
      </>
    </CheckoutProvider>
    
  )
}

export { CheckoutPage }