import React from 'react'
import CartCheckout from '../../Components/CartCheckout/CartCheckout'
import CartProducts from '../../Components/CartProducts/CartProducts'
import './OrderSummaryPage.css'

function OrderSummaryPage() {
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
                  <p><span className="text--bold margin-right--small">{"name"}:</span>{`${"address"}, ${"city"}`}</p>
                </div>
              </div>
            </div>
          </div>
          <CartProducts />
        </div>
        <CartCheckout label={"PlaceOrder"} nextpath={"/checkout/ordersuccess"} />
    </div>
  )
}

export default OrderSummaryPage