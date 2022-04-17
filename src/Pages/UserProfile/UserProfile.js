import axios from 'axios';
import React, { useState, useReducer } from 'react';
import { useAuthContext } from '../../Context';
import { userProfileReducerFn } from '../../Reducers';
import { toastsuccess, toasterror, USER_PROFILE_ACTIONS } from '../../Utilities';
import './UserProfile.css';

function UserProfile() {

  const [editMode, seteditMode] = useState(false)

  const { user, setuser } = useAuthContext()

  const [userProfile, userProfileDispatch ] = useReducer( userProfileReducerFn , user )

  const { userName, firstName, lastName, email, phone, gender } = userProfile

  let config = {
    headers: {
      authorization: user?.token,
    }
  }

  const onUpdateSubmit = async ()=> {
      try{
          await axios.post('/api/user/profile', { updatedUser: userProfile} ,config)  
          setuser(userProfile)
          toastsuccess("Updated User Succesfully")
      }catch(err){
          console.error(err)
          userProfileDispatch({ type: 'resetProfile', payload: user})
          toasterror("There was an Error")
      }
      seteditMode(false)
  }

  return (
    <div className='user-profile--section'>
        <div className="user-profile__container">
        <h2 className="text--center margin-tb--medium">User Profile</h2>
        <div className="form">

            <div className="form-element">
                <label className="form-label form-label--required">User Name</label>
                <input 
                type="text"
                onChange={(e) => userProfileDispatch({ type: USER_PROFILE_ACTIONS.UPDATE_USER_NAME, payload: e.target.value})}
                className="form-field"
                value={userName}
                placeholder="Username"
                disabled={!editMode} />
            </div>
            
            <div className="form-element">
                <label className="form-label form-label--required">First Name</label>
                <input
                type="text"
                onChange={(e) => userProfileDispatch({ type: USER_PROFILE_ACTIONS.UPDATE_FIRST_NAME, payload: e.target.value})}
                className="form-field"
                value={firstName}
                placeholder="Enter First Name"
                disabled={!editMode} />
            </div>
            
            <div className="form-element">
                <label className="form-label form-label--required">Last Name</label>
                <input 
                type="text"
                onChange={(e)=> userProfileDispatch({ type: USER_PROFILE_ACTIONS.UPDATE_LAST_NAME, payload: e.target.value})}
                className="form-field"
                value={lastName}
                placeholder="Enter Last Name"
                disabled={!editMode} />
            </div>

            <div className="form-element">
                <label className="form-label form-label--required">Email</label>
                <input 
                type="email" 
                className="form-field--text-only" 
                value={email} 
                disabled={true} />
            </div>

            <div className="form-element">
                <label className="form-label form-label--required">Phone No.</label>
                <input 
                type="text" 
                onChange={(e) => userProfileDispatch({ type: USER_PROFILE_ACTIONS.UPDATE_PHONE, payload: e.target.value})} 
                className="form-field" 
                value={phone || ''} 
                disabled={!editMode} />
            </div>

            <div className="form-element">
                <label className="form-label">Gender</label>

                <input 
                type="radio" 
                onChange={(e) => userProfileDispatch({ type: USER_PROFILE_ACTIONS.UPDATE_GENDER, payload: e.target.value})}
                checked={gender==='Male'}
                className="form-radio"
                name="gender" 
                value="Male" 
                disabled={!editMode} />

                <span> Male </span>

                <input 
                type="radio" 
                onChange={(e) => userProfileDispatch({ type: USER_PROFILE_ACTIONS.UPDATE_GENDER, payload: e.target.value})} 
                checked={gender==='Female'} 
                className="form-radio" 
                name="gender" 
                value="Female" 
                disabled={!editMode} />

                <span> Female</span>
            </div>
            {editMode ? <button onClick={onUpdateSubmit} className="btn btn--outline-secondary margin--small">Save</button> : 
                        <button onClick={()=> seteditMode(true)}className="btn btn--outline-secondary margin--small">Edit</button> }
            
        </div>
    </div>
    </div>
  )
}

export { UserProfile }