import React, {useState} from 'react';
import './AddressModal.css';

function AddressModal({ editMode, showModal, closeModal, onSubmit, userAddress}) {
  const [name, setName] = useState(userAddress?.name || "")
  const [address, setAddress] = useState(userAddress?.address || "")
  const [city, setCity] = useState(userAddress?.city || "")
  const [ErrorValues, setErrorValues] = useState({})

  const resetAddress = ()=>{
    setName(userAddress?.name || "")
    setAddress(userAddress?.address || "")
    setCity(userAddress?.city || "")
    setErrorValues({})
  }

  const validateSubmit = () => {
    const errors = {}

    if(name.length === 0){
      errors.name = "Name Required"
    }

    if(address.length === 0){
      errors.address = "Address Required"
    }

    if(city.length === 0){
      errors.city = "City Required"
    }

    return errors
  }

  const handlesubmit = () => {

    const errors = validateSubmit()

    if(Object.keys(errors).length === 0){
      let newobj = { name, address, city}
      if (userAddress?._id){
        newobj['_id']=userAddress._id
      }

      setErrorValues({})
      onSubmit(newobj)
      
      if(!editMode){
        resetAddress()
      }
    
      closeModal()
    }else{
      setErrorValues(errors)
    }
  }

  const handleModalClickOutside = (e) => {
    if(e.target.id === "modal--outside" ){
      handlecloseModal()
    }
  }

  const handlecloseModal = () => {
    resetAddress()
    closeModal()
  }

  return (
    <div id="modal--outside" onClick={handleModalClickOutside} className={`modal__overlay address__modal ${showModal ? '' : 'hide'}`}>
      <div className="modal__container">
          <div className="modal__header container__flex margin--medium">
              <h3 className="text--large">{editMode ? 'Edit' : 'Add'} Address</h3>
              <i className="fas fa-times modal__close" onClick={handlecloseModal}></i>
          </div>
          <div className="modal__body margin-bottom--large">
              <div className="padding-right--small">
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Name</label>
                    <input type="text" className="form-field" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name"/>
                    <span className="error--message margin--small">{ErrorValues.name}</span>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Address</label>
                    <input type="text" className="form-field" value={address} onChange={(e)=> setAddress(e.target.value)} placeholder="Enter Address"/>
                    <span className="error--message margin--small">{ErrorValues.address}</span>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter City</label>
                    <input type="text" className="form-field" value={city} onChange={(e)=> setCity(e.target.value)} placeholder="Enter City"/>
                    <span className="error--message margin--small">{ErrorValues.city}</span>
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

export { AddressModal }

