import React from 'react'

function Ratings({ value }) {

  const filled = Math.round(value)

  const setStars = () => {
    let arr = [0,0,0,0,0]
    arr = arr.map((item,i) => i<=filled-1 ? 1 : 0)
    return arr.map((item) => item===1 ? <label className="star-filled"></label> : <label className="star"></label>)
  }

  return (
    <div className="star-rating--plain">
        {setStars()}
    </div>
  )
}

export default Ratings