import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../Context'

function Logout() {

  const {signout} = useAuthContext()

  const { user } = useAuthContext()

  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
    signout()
  }, [])

  return (
    <div className="full--container">
      <div className="logout">
          <p className="text--large text--center">User has Succesfully Logged Out</p>
          <div className="auth__btn--container margin-tb--medium">
              <button className="btn btn--secondary"><Link to="/">Go Home</Link></button>
          </div>
      </div>
    </div>
  )
}

export { Logout }