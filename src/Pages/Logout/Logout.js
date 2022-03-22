import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { useAuthContext } from '../../Context/AuthContext/AuthContext'

function Logout() {

  const {signout} = useAuthContext()

  useEffect(()=>{
    signout()
  }, [])

  return (
    <div className="logout--container">
      <div className="logout">
          <p className="text--large text--center">User has Succesfully Logged Out</p>
          <div className="auth__btn--container margin-tb--medium">
              <button className="btn btn--secondary"><Link to="/">Go Home</Link></button>
          </div>
      </div>
    </div>
  )
}

export default Logout