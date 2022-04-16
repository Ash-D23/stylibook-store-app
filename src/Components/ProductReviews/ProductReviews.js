import React, { useState } from 'react';
import './ProductReviews.css';
import RatingsInput from '../RatingsInput/RatingsInput';
import UserReview from '../UserReview/UserReview';
import { toasterror } from '../../Utilities';

function ProductReviews({ productID, userReviews, addReview, DeleteReview, EditReview }) {

  const [review, setreview] = useState("")
  const [ratings, setratings] = useState(null)

  const submitreview = () => {
    if(review==="" || !ratings){
      toasterror("Enter a Valid Review")
      return
    }
    addReview(review, ratings)
    setreview("")
    setratings(null)
  }

  return (
    <div className="review--container">
        <h2 className="text--center">Reviews</h2>

        <div className="container__flex--center container__flex--wrap margin-tb--large">
          <p className="margin-right--medium">Give your Ratings: </p>
          <RatingsInput ratings={ratings} setratings={setratings} />
        </div>

        <div className="review__input--container margin-tb--large">          
            <input onChange={(e)=> setreview(e.target.value)} value={review} className="review__input margin-right--medium" placeholder="Review" />
            <button onClick={submitreview} className="btn btn--secondary">Submit</button>
        </div>       

        <div className="review--users">
          {userReviews?.map((item)=>{
            return <UserReview key={item._id} productID={productID} userReview={item} DeleteReview={DeleteReview} EditReview={EditReview} />
          })}
        </div>
    </div>
  )
}

export { ProductReviews }