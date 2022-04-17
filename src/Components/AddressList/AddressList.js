import React from 'react';
import { useAddress, useCheckout } from '../../Context';
import { DisplayAddress } from '../DisplayAddress/DisplayAddress';
import { Loader } from '../Loader/Loader';
import './AddressList.css';

function AddressList() {

  const { addressList, isLoading } = useAddress()

  const { selectedAddress } = useCheckout()

  return (
    <div className="container__flex--center margin-tb--medium">
      <div className="container--100 padding--medium">
        <p className="text--center text--large">Address List</p>
        { isLoading && <Loader />}
        <div className="addresslist__container">
          {addressList?.map((item)=> {
            return <DisplayAddress key={item._id} userAddress={item} selected={item._id===selectedAddress?._id} />
          })}
        </div>
      </div>
    </div>
  )
}

export { AddressList }