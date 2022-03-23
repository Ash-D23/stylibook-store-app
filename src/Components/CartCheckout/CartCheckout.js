import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext/CartContext';
import './CartCheckout.css';

function CartCheckout({ label, nextpath}) {

  const {calculateTotal} = useCart()

  const total = calculateTotal()
  
  return (
    <div className="checkout__Cart">
          <div className="checkout__amount margin--large">
              <div className="checkout__cart--heading">
                  <h3>Order Details</h3>
              </div>
              <div className="checkout__card--description">
                  <div className="checkout__price"> 
                      <p>Price</p>
                      <p>Rs.{total}</p>
                  </div>
                  <div className="checkout__price"> 
                      <p>Discount</p>
                      <p>Rs.{0}</p>
                  </div>
                  <div className="checkout__price"> 
                      <p>Delivery Charge</p>
                      <p>Rs.{0}</p>
                  </div>
                  <div className="checkout__price"> 
                      <p>Payment Mode</p>
                      <p>Cash</p>
                  </div>
              </div>
              <div className="checkout__card--total">
                  <div className="checkout__price"> 
                      <p>Order Total</p>
                      <p>Rs.{total}</p>
                  </div>
                  <button onClick={nextpath} className="btn btn--secondary">{label}</button>
              </div>
          </div>
      </div>
  )
}

export default CartCheckout