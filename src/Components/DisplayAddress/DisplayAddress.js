import React, {useState} from 'react';
import { useAddress } from '../../Context';
import { useCheckout } from '../../Context/CheckoutContext/CheckoutContext';
import { AddressModal } from '../AddressModal/AddressModal';
import './DisplayAddress.css';

function DisplayAddress({ userAddress, selected }) {

  const [showModal, setshowModal] = useState(false)

  const { onDeleteAddress, onEditAddress } = useAddress()

  const { onToggleAddressSelect } = useCheckout()

  let {_id, name, address, city} = userAddress

  return (

    <div className={`single-address__container container--relative border--${selected ? 'secondary' :'grey' }`}>
      <div className="single-address--select container__flex--center">
        { selected ? <span onClick={()=>onToggleAddressSelect(userAddress)}>
            <i className="fas fa-check-circle text--large clr--secondary"></i>
          </span> : 
          <span onClick={()=>onToggleAddressSelect(userAddress)}>
            <i className="far fa-circle select--circle text--large clr--secondary"></i>
            <i className="fas fa-check-circle text--large clr--secondary nextcircle"></i>
          </span> }
      </div>
      <div className="single-adress--content padding--medium">
        <div className="container__flex margin-bottom--medium">
          <p onClick={()=>onToggleAddressSelect(userAddress)}><span className="text--bold margin-right--small">{name}:</span>{`${address}, ${city}`}</p>
        </div>
        <div>
          <button onClick={()=> setshowModal(true)} className="btn btn--primary border--grey margin-right--small">Edit</button>
          <button onClick={()=> onDeleteAddress(_id)} className="btn btn--secondary">Delete</button>
        </div>
      </div>
      <AddressModal editMode={true} onSubmit={onEditAddress} userAddress={userAddress} showModal={showModal} closeModal={()=>setshowModal(false)} />
    </div>
  )
}

export { DisplayAddress }