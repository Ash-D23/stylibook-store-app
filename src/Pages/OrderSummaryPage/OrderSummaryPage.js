import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartCheckout from '../../Components/CartCheckout/CartCheckout'
import CartProducts from '../../Components/CartProducts/CartProducts'
import { useCheckout } from '../../Context/CheckoutContext/CheckoutContext'
import './OrderSummaryPage.css'

function OrderSummaryPage() {

  const { selectedAddress } = useCheckout()

  const navigate = useNavigate()

  const navigatetoplaceorder = () => navigate("/checkout/ordersuccess")

  return (
    <div className="checkout">
        <div>
          <h3 className="text--center margin--large">Order Summary</h3>
          <div className="single__address">
            <div className={`single-address__container container--relative border--secondary`}>
              <div className="single-address--select container__flex--center">
                <i className="fas fa-check-circle text--large clr--secondary"></i>
              </div>
              <div className="single-adress--content padding--medium">
                <p className="text--bold">Address</p>
                <div className="container__flex margin-bottom--medium">
                  <p><span className="text--bold margin-right--small">{selectedAddress?.name}:</span>{`${selectedAddress?.address}, ${selectedAddress?.city}`}</p>
                </div>
              </div>
            </div>
          </div>
          <CartProducts checkout={true} />
        </div>
        <CartCheckout label={"PlaceOrder"} nextpath={navigatetoplaceorder} />
    </div>
  )
}

export default OrderSummaryPage