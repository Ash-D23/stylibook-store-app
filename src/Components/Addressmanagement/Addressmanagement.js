import React, { useState } from 'react'
import { AddressList } from '../AddressList/AddressList';
import { AddressModal } from '../AddressModal/AddressModal';
import { useAddress } from '../../Context';

function AddressManagement() {
  const [showModal, setShowModal] = useState(false)
  const { onAddAddress } = useAddress()

  return (
    <div className="container--80 padding--medium">
      <h2 className="text--center margin-tb--medium">Address Management</h2>
      <div className="container__flex--center margin-tb--medium">
        <button className="btn btn--secondary btn--icon" onClick={()=>setShowModal(true)}><span><i className="fas fa-plus"></i></span>Add New Address</button>
      </div>
      <AddressList />
      <AddressModal onSubmit={onAddAddress} showModal={showModal} closeModal={()=>setShowModal(false)} />
    </div>
  )
}

export { AddressManagement }