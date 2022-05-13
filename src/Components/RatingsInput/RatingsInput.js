import React from 'react'

function RatingsInput({ ratings, setratings }) {
  const ratingsInputData = [{ id: "star5", value: "5" }, 
                            { id: "star4", value: "4" }, 
                            { id: "star3", value: "3" }, 
                            { id: "star2", value: "2" },
                            { id: "star1", value: "1" }]
  return (
    <div className="star-rating">
        
      {ratingsInputData?.map((item)=> {
        return (
        <>
          <input onClick={(e)=> setratings(e.target.value)} type="radio" name="stars" id={item.id} value={item.value} checked={ratings===item.value} />
          <label for={item.id}></label>
        </>
        )
      })}
    </div>
  )
}

export default RatingsInput