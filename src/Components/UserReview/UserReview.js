import React, { useState } from 'react';
import { useAuthContext } from '../../Context';
import './UserReview.css'

function UserReview({ userReview, DeleteReview, EditReview }) {

  const {_id, userID, userProfile, review, ratings} = userReview

  const { user } = useAuthContext()

  const [showOptions, setshowOptions] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [reviewInput, setreviewinput] = useState(review)

  const handleEdit = () => {
    setshowOptions(false)
    setEditMode(true)
  }

  const onEditReview = () => {
    setEditMode(false)
    EditReview({...userReview, review: reviewInput})
  }

  return editMode ? (
    <div className="container__flex--center container__flex--wrap margin-tb--medium container--relative">
        <div className="user__profile--container">
            <img className="user__profile--image" src={userProfile} />
        </div>
        <span className="para-rating__container margin-left--medium">{ratings} &#9733;</span>
        <input className="review__input--edit margin-left--small" type="text" value={reviewInput} onChange={(e) => setreviewinput(e.target.value)} />
        <button onClick={onEditReview} className="btn btn--primary margin-lr--small"><i class="fas fa-save save--icon"></i></button>
        <button onClick={() => setEditMode(false)} className="btn btn--primary"><i class="fas fa-times cancel--icon"></i></button>
    </div>
  ) :(
    <div className="container__flex--center margin-tb--medium container--relative">
        <div className="user__profile--container">
            <img className="user__profile--image" src={userProfile} />
        </div>
        <p className="margin-left--medium"> <span className="para-rating__container">{ratings} &#9733;</span> {review} </p>
        <div className='container--relative'>
        { userID === user?._id ? <i onClick={()=>setshowOptions(prev => !prev)} className="fas fa-ellipsis-v pointer"></i> : null }
        { showOptions ? <div className='review--actions'>
          <p onClick={handleEdit}>Edit</p>
          <p onClick={() => DeleteReview(_id)}>Delete</p>
        </div> : null }
        </div>
    </div>
  )
}

export default UserReview