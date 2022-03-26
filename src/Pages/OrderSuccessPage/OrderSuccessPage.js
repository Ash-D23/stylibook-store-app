import React from 'react'
import { Link } from 'react-router-dom'

function OrderSuccessPage() {
  return (
    <div className="full--container">
      <div>
          <p className="text--large text--center">Your Order is Successfully Placed.</p>
          <div className="auth__btn--container margin-tb--medium">
            <button className="btn btn--secondary"><Link to="/">Go Home</Link></button>
          </div>
      </div>
    </div>
  )
}

export default OrderSuccessPage