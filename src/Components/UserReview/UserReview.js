import React from 'react'

function UserReview({ userReview: {userID, userProfile, review, ratings}}) {
  return (
    <div className="container__flex--center margin-tb--medium">
        <div className="user__profile--container">
            <img className="user__profile--image" src={userProfile} />
        </div>
        <p className="margin-left--medium"> <span className="para-rating__container">{ratings} &#9733;</span> {review} </p>
    </div>
  )
}

export default UserReview