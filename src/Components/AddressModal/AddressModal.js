import React, {useState} from 'react';
import './AddressModal.css';

function AddressModal({ editmode, showmodal, closeModal, onsubmit, useraddress}) {
  const [name, setname] = useState(useraddress?.name || "")
  const [address, setaddress] = useState(useraddress?.address || "")
  const [city, setcity] = useState(useraddress?.city || "")
  const [errorvalues, seterrorvalues] = useState({})

  const resetaddress = ()=>{
    setname(useraddress?.name || "")
    setaddress(useraddress?.address || "")
    setcity(useraddress?.city || "")
    seterrorvalues({})
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
      if (useraddress?._id){
        newobj['_id']=useraddress._id
      }

      seterrorvalues({})
      onsubmit(newobj)
      
      if(!editmode){
        resetaddress()
      }
    
      closeModal()
    }else{
      seterrorvalues(errors)
    }
  }

  const handlecloseModal = () => {
    resetaddress()
    closeModal()
  }

  return (
    <div className={`modal__overlay address__modal ${showmodal ? '' : 'hide'}`}>
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
                    <span className="error--message margin--small">{errorvalues.name}</span>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Address</label>
                    <input type="text" className="form-field" value={address} onChange={(e)=> setaddress(e.target.value)} placeholder="Enter Address"/>
                    <span className="error--message margin--small">{errorvalues.address}</span>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter City</label>
                    <input type="text" className="form-field" value={city} onChange={(e)=> setcity(e.target.value)} placeholder="Enter City"/>
                    <span className="error--message margin--small">{errorvalues.city}</span>
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

