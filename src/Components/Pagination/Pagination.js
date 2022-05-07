import React, {useState, useEffect} from 'react';
import './Pagination.css'

function Pagination({ data, Component, limit }) {

  const [currentPage, setCurrentPage] = useState(0)

  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  const goToPrevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  useEffect(()=> {
    if( currentPage+1 > Math.ceil(data.length/limit)){
      data.length === 0 ? setCurrentPage(0) : setCurrentPage(Math.ceil(data.length/limit)-1)
    }
  }, [data])

  const totalPages = Math.ceil(data.length/limit)

  const startIndex = limit*(currentPage)
  const endIndex = startIndex + limit

  return (
    <>
      {data.slice(startIndex, endIndex).length === 0 ? 
          <div className='empty-data--container'>
            <img src="./Images/empty-cart.svg" alt="wishlist" />
          </div>
        : data.slice(startIndex, endIndex).map((item)=>{
          return <Component key={item._id} product={item} />
      })}
  
      { totalPages === 0 ? null : <div className='pagination__actions--container container__flex--center'>
        <div className="container__flex--center">
          <button className="btn btn--secondary btn--icon" onClick={goToPrevPage} disabled={currentPage === 0}>Prev</button>
          <p className="margin--small">{currentPage+1}/{totalPages}</p>
          <button className="btn btn--secondary" onClick={goToNextPage} disabled={totalPages === 0 || currentPage === totalPages-1}>Next</button>
        </div>
      </div> }
    </>
  )
}

export { Pagination }