import React from 'react'

function LoaderOverlay() {
  return (
    <>
        <div className="loader loader--overlay center">
            <div className="sp sp-circle"></div>
        </div>
        <div className="loader__container--overlay">

        </div>
    </>
    
  )
}

export { LoaderOverlay }