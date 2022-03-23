import React from 'react'

function OrderSuccessPage() {
  return (
    <div className="logout--container">
      <div className="logout">
          <p className="text--large text--center">Your Order is Successfully Placed.</p>
          <div className="auth__btn--container margin-tb--medium">
              <button className="btn btn--secondary"><a href="../index.html">Go Home</a></button>
          </div>
      </div>
    </div>
  )
}

export default OrderSuccessPage