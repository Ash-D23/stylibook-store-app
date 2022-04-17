import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCart } from '../../Context';
import './CouponModal.css';

function CouponModal({ showModal, closeModal }) {

  const [coupons, setCoupons] = useState([])
  const [couponSearch, setCouponSearch] = useState('')
  const [error, seterror] = useState(null)

  const { calculateTotal, applyCoupon } = useCart()

  const total = calculateTotal()

  const handleCloseModal = () => {
    setCouponSearch('')
    seterror('')
    closeModal()
  }

  const handleSearchCoupon = () => {
    let res = coupons.find((item) => item.name === couponSearch)
    if(res){
        handleApplyCoupon(res)
        handleCloseModal()
    }else{
        setCouponSearch('')
        seterror('Invalid Coupon')
    }
  }

  const getCoupons = async () => {
      try{
        let result = await axios.get('/api/coupons')
        setCoupons(result.data?.coupons?.filter((item)=> item.price < total))
      }catch(err){
        console.error(err)
      }
  }

  const handleApplyCoupon = (item) => {
      applyCoupon(item)
      closeModal()
  }

  useEffect(() => {
    getCoupons()
  }, [total])

  return (
    <div className={`modal__overlay coupon__modal ${showModal ? '' : 'hide'}`}>
      <div className="modal__container">
          <div className="modal__header container__flex margin--medium">
            <h3 className="text--large">Coupons</h3>
            <i className="fas fa-times modal__close" onClick={handleCloseModal}></i>
          </div>
          <div className="modal__body margin-bottom--large">
            <div className="form-element--column">
                <div className='coupon__input--container '>
                    <input type="text" className="form-field coupon__input" value={couponSearch}
                     onChange={(e) => setCouponSearch(e.target.value)} placeholder="Enter Code"/>
                    <button onClick={handleSearchCoupon} className='btn btn--secondary'>Apply</button>
                </div>
                <span className="error--message margin--small">{error}</span>
                <div>
                    {coupons.length===0 ? <p className='text--center padding--medium'>No Coupons Available</p>: coupons.map((item)=>{
                        return (
                        <div key={item._id} onClick={()=> handleApplyCoupon(item)} className='coupon--item'>
                            <p className=''>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                        )
                    })}
                </div>
                
            </div>
          </div>
          <div className="modal__actions actions--coupon">
              <button onClick={handleCloseModal} className="btn btn--secondary">Cancel</button>
          </div>
      </div>
    </div>
  )
}

export { CouponModal }