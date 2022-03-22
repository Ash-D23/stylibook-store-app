import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext/AuthContext'

function SignUp() {

  const { signin } = useAuthContext()

  return (
    <div className="auth__container">
      <div className="auth__contents border--grey">
          <h3 className="text--center margin-tb--medium">Sign Up</h3>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Email</label>
              <input type="text" className="form-field margin-tb--small" placeholder="abc@example.com"/>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Password</label>
              <input type="password" className="form-field margin-tb--small" placeholder="Password"/>
          </div>
          <div className="auth__description">
              <input type="checkbox" className="form-checkbox" /> 
              <span>I accept all Terms and Conditions </span>
          </div>
          <button className="btn btn-auth margin-bottom--medium">Sign Up</button>

          <Link className="auth__link margin-tb--medium" to="/login">Already have an account</Link>
          
      </div>
    </div>
  )
}

export default SignUp