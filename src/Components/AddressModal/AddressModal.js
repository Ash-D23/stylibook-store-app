import React, {useState} from 'react';
import './AddressModal.css';

function AddressModal({ editmode, showmodal, closeModal, onsubmit, useraddress}) {
  const [name, setname] = useState(useraddress?.name || "")
  const [address, setaddress] = useState(useraddress?.address || "")
  const [city, setcity] = useState(useraddress?.city || "")

  const resetaddress = ()=>{
    setname(useraddress?.name || "")
    setaddress(useraddress?.address || "")
    setcity(useraddress?.city || "")
  }

  const handlesubmit = () => {
    let newobj = { name, address, city}
    if (useraddress?.id){
      newobj['id']=useraddress.id
    }

    onsubmit(newobj)
    
    if(!editmode){
      resetaddress()
    }
    
    closeModal()
  }

  const handlecloseModal = () => {
    resetaddress()
    closeModal()
  }

  return (
    <div classNameName={`modal__overlay address__modal ${showmodal ? '' : 'hide'}`}>
      <div className="modal__container">
          <div className="modal__header container__flex margin--medium">
              <h3 className="text--large">{editmode ? 'Edit' : 'Add'} Address</h3>
              <i className="fas fa-times modal__close" onClick={handlecloseModal}></i>
          </div>
          <div className="modal__body margin-bottom--large">
              <div className="padding-right--small">
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Name</label>
                    <input type="text" className="form-field" value={name} onChange={(e)=> setname(e.target.value)} placeholder="Enter Name"/>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Address</label>
                    <input type="text" className="form-field" value={address} onChange={(e)=> setaddress(e.target.value)} placeholder="Enter Address"/>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter City</label>
                    <input type="text" className="form-field" value={city} onChange={(e)=> setcity(e.target.value)} placeholder="Enter City"/>
                </div>
              </div>
          </div>
          <div className="modal__actions">
              <button onClick={handlesubmit} className="btn btn--primary border--grey">Submit</button>
              <button onClick={handlecloseModal} className="btn btn--secondary">Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default AddressModal

