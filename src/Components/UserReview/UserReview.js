import React from 'react';
import './UserReview.css'

function UserReview({ userReview: {userID, userProfile, review, ratings}}) {
  return (
    <div className="container__flex--center margin-tb--medium container--relative">
        <div className="user__profile--container">
            <img className="user__profile--image" src={userProfile} />
        </div>
        <p className="margin-left--medium"> <span className="para-rating__container">{ratings} &#9733;</span> {review} </p>
        <i className="fas fa-ellipsis-v"></i>
        <div className='review--actions'>
          <p>Edit</p>
          <p>Delete</p>
        </div>
    </div>
  )
}

export default UserReview