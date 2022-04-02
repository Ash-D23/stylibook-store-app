import React from 'react'

function Ratings({ value }) {

  const filled = Math.round(value)

  const setStars = () => {
    let arr = [0,0,0,0,0]
    arr = arr.map((item,i) => i<=filled-1 ? 1 : 0)
    return arr.map((item, index) => item===1 ? <label key={index} className="star-filled"></label> : <label key={index} className="star"></label>)
  }

  return (
    <div className="star-rating--plain">
        {setStars()}
    </div>
  )
}

export { Ratings }