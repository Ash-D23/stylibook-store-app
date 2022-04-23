import React, { useState } from 'react';
import { useCart } from '../../Context';
import { CouponModal } from '../CouponModal/CouponModal';
import './CartCheckout.css';

function CartCheckout({ label, nextpath, showApplyCoupon}) {

  const [showModal, setShowModal] = useState(false)

  const { calculateTotal, discount, deliveryCharge, appliedCoupon } = useCart()

  const total = calculateTotal()

  const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0

  const orderTotal = total - discount - deliveryCharge - couponDiscount
  
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
                    <p>Rs.{discount}</p>
                </div>
                <div className="checkout__price"> 
                    <p>Delivery Charge</p>
                    <p>Rs.{deliveryCharge}</p>
                </div>
                { appliedCoupon ? <div className="checkout__price"> 
                    <p>Coupon Discount</p>
                    <p>Rs.{couponDiscount}</p>
                </div> : null }
                <div className="checkout__price"> 
                    <p>Payment Mode</p>
                    <p>Cash</p>
                </div>
            </div>
            <div className="checkout__card--total">
                <div className="checkout__price"> 
                    <p>Order Total</p>
                    <p>Rs.{orderTotal}</p>
                </div>
                <button onClick={nextpath} className="btn btn--secondary">{label}</button>
                { showApplyCoupon ? <div className="checkout__price apply-coupon"> 
                    <p onClick={()=>setShowModal(true)}>Apply Coupon</p>
                </div> : null }
            </div>
        </div>
        { showApplyCoupon ? <CouponModal showModal={showModal} closeModal={()=>setShowModal(false)} /> : null }
    </div>
  )
}

export { CartCheckout }