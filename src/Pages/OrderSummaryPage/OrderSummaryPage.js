import axios from 'axios';
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartCheckout, CartProducts, LoaderOverlay } from '../../Components';
import { useAuthContext, useCart, useCheckout } from '../../Context/';
import './OrderSummaryPage.css';

function OrderSummaryPage() {

  const [Loading, setLoading] = useState(false)

  const { selectedAddress } = useCheckout()

  const { emptyCart } = useCart()

  const {user} = useAuthContext()

  const navigate = useNavigate()

  let config = {
    headers: {
      authorization: user?.token,
    }
  }

  const navigatetoplaceorder = async () => {
    setLoading(true)
    try{
        let result = await axios.post('/api/user/emptyCart', {} , config)
        setLoading(false)
        emptyCart()
        navigate("/checkout/ordersuccess")
    }catch(err){
        console.log(err)
        setLoading(false)
    }
  }

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
        { Loading && <LoaderOverlay />}
    </div>
  )
}

export { OrderSummaryPage }