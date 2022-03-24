import React, {useState} from 'react';
import './UserProfile.css'

function UserProfile() {
  const [editmode, seteditmode] = useState(false)

  return (
    <div className="user-profile__container">
        <h2 className="text--center margin-tb--medium">User Profile</h2>
        <div className="form">

            <div className="form-element">
                <label className="form-label form-label--required">User Name</label>
                <input type="text" className="form-field" value="efe" placeholder="Username" disabled={!editmode} />
            </div>
            
            <div className="form-element">
                <label className="form-label form-label--required">First Name</label>
                <input type="text" className="form-field" value="efe" placeholder="Enter First Name" disabled={!editmode} />
            </div>
            
            <div className="form-element">
                <label className="form-label form-label--required">Last Name</label>
                <input type="text" className="form-field" placeholder="Enter Last Name" disabled={!editmode} />
            </div>

            <div className="form-element">
                <label className="form-label form-label--required">Email</label>
                <input type="email" className="form-field--text-only" value="abc@example.com" disabled={!editmode} />
            </div>

            <div className="form-element">
                <label className="form-label form-label--required">Phone No.</label>
                <input type="Number" className="form-field" value="98765656556" disabled={!editmode} />
            </div>

            <div className="form-element">
                <label className="form-label">Gender</label>

                <input type="radio" className="form-radio" name="gender" value="Male" disabled={!editmode} />
                <span> Male </span>
                <input type="radio" className="form-radio" name="gender" value="Female" disabled={!editmode} />
                <span> Female</span>
            </div>
            {editmode ? <button onClick={()=> seteditmode(false)} className="btn btn--outline-secondary margin--small">Save</button> : 
                        <button onClick={()=> seteditmode(true)}className="btn btn--outline-secondary margin--small">Edit</button> }
            
        </div>
    </div>
  )
}

export default UserProfile