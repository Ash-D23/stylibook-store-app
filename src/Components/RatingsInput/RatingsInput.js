import React from 'react'

function RatingsInput({ ratings, setratings }) {
  return (
    <div className="star-rating">
        <input onClick={(e)=> setratings(e.target.value)} type="radio" name="stars" id="star5" value="5" checked={ratings==="5"} />
        <label for="star5"></label>
                
        <input onClick={(e)=> setratings(e.target.value)} type="radio" name="stars" id="star4" value="4" checked={ratings==="4"} />
        <label for="star4"></label>
                
        <input onClick={(e)=> setratings(e.target.value)} type="radio" name="stars" id="star3" value="3" checked={ratings==="3"} />
        <label for="star3"></label>
                
        <input onClick={(e)=> setratings(e.target.value)} type="radio" name="stars" id="star2" value="2" checked={ratings==="2"} />
        <label for="star2"></label>
                
        <input onClick={(e)=> setratings(e.target.value)} type="radio" name="stars" id="star1" value="1" checked={ratings==="1"} />
        <label for="star1"></label>
    </div>
  )
}

export default RatingsInput