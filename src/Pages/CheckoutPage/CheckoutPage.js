import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import { CheckoutProvider } from '../../Context/CheckoutContext/CheckoutContext';
import SelectAddressPage from '../SelectAddressPage/SelectAddressPage';
import OrderSummaryPage from '../OrderSummaryPage/OrderSummaryPage';
import OrderSuccessPage from '../OrderSuccessPage/OrderSuccessPage';


function CheckoutPage() {

  return (
    <CheckoutProvider>
      <div className="checkout">
        <Routes>
          <Route path='/' element={<SelectAddressPage />} />
          <Route path='/ordersummary' element={<OrderSummaryPage />} />
          <Route path='/ordersuccess' element={<OrderSuccessPage />} />
        </Routes>
      </div>
    </CheckoutProvider>
    
  )
}

export default CheckoutPage