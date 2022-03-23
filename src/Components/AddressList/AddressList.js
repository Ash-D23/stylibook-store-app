import React from 'react';
import { useAddress } from '../../Context/AddressContext/AddressContext';
import { useCheckout } from '../../Context/CheckoutContext/CheckoutContext';
import DisplayAddress from '../DisplayAddress/DisplayAddress';
import Loader from '../Loader/Loader';
import './AddressList.css';

function AddressList() {

  const { addressList, isloading } = useAddress()

  const { selected } = useCheckout()
   
  return (
    <div className="container__flex--center margin-tb--medium">
      <div className="container--100 padding--medium">
        <p className="text--center text--large">Address List</p>
        { isloading && <Loader />}
        <div className="addresslist__container">
          {addressList?.map((item)=> {
            return <DisplayAddress key={item.id} useraddress={item} selected={item.id===selected} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AddressList