import React, { useState } from 'react';
import './UserReview.css'

function UserReview({ userReview: {userID, userProfile, review, ratings}}) {

  const [showOptions, setshowOptions] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [reviewInput, setreviewinput] = useState(review)

  return editMode ? (
    <div className="container__flex--center container__flex--wrap margin-tb--medium container--relative">
        <div className="user__profile--container">
            <img className="user__profile--image" src={userProfile} />
        </div>
        <span className="para-rating__container margin-left--medium">{ratings} &#9733;</span>
        <input className="review__input--edit margin-left--small" type="text" value={reviewInput} onChange={(e) => setreviewinput(e.target.value)} />
        <button>Save</button>
        <button onClick={()=> setEditMode(false)}>Cancel</button>
    </div>
  ) :(
    <div className="container__flex--center margin-tb--medium container--relative">
        <div className="user__profile--container">
            <img className="user__profile--image" src={userProfile} />
        </div>
        <p className="margin-left--medium"> <span className="para-rating__container">{ratings} &#9733;</span> {review} </p>
        <div className='container--relative'>
        <i onClick={()=>setshowOptions(prev => !prev)} className="fas fa-ellipsis-v pointer"></i>
        { showOptions ? <div className='review--actions'>
          <p onClick={()=>setEditMode(true)}>Edit</p>
          <p>Delete</p>
        </div> : null }
        </div>
    </div>
  )
}

export default UserReview