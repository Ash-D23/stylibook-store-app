import React, {useState} from 'react';
import { useAddress } from '../../Context/AddressContext/AddressContext';
import { useCheckout } from '../../Context/CheckoutContext/CheckoutContext';
import AddressModal from '../AddressModal/AddressModal';
import './DisplayAddress.css';

function DisplayAddress({ useraddress, selected }) {

  const [showmodal, setshowmodal] = useState(false)

  const { ondeleteaddress, oneditaddress } = useAddress()

  const { onselect } = useCheckout()

  let {_id, name, address, city} = useraddress

  return (

    <div className={`single-address__container container--relative border--${selected ? 'secondary' :'grey' }`}>
      <div className="single-address--select container__flex--center">
        { selected ? <span onClick={()=>onselect(useraddress)}>
            <i className="fas fa-check-circle text--large clr--secondary"></i>
          </span> : 
          <span onClick={()=>onselect(useraddress)}>
            <i className="far fa-circle select--circle text--large clr--secondary"></i>
            <i className="fas fa-check-circle text--large clr--secondary nextcircle"></i>
          </span> }
      </div>
      <div className="single-adress--content padding--medium">
        <div className="container__flex margin-bottom--medium">
          <p onClick={()=>onselect(useraddress)}><span className="text--bold margin-right--small">{name}:</span>{`${address}, ${city}`}</p>
        </div>
        <div>
          <button onClick={()=> setshowmodal(true)} className="btn btn--primary border--grey margin-right--small">Edit</button>
          <button onClick={()=> ondeleteaddress(_id)} className="btn btn--secondary">Delete</button>
        </div>
      </div>
      <AddressModal editmode={true} onsubmit={oneditaddress} useraddress={useraddress} showmodal={showmodal} closeModal={()=>setshowmodal(false)} />
    </div>
  )
}

export default DisplayAddress