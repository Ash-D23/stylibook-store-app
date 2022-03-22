import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext/AuthContext';
import './Auth.css';

function Login() {

  const { signin } = useAuthContext();

  return (
    <div className="auth__container">
      <div className="auth__contents border--grey">
          <h3 className="text--center margin-tb--medium">Login</h3>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Email</label>
              <input type="text" className="form-field margin-tb--small" placeholder="abc@example.com"/>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Password</label>
              <input type="password" className="form-field margin-tb--small" placeholder="Password"/>
          </div>
          <button onClick={()=> signin()} className="btn btn-auth margin-bottom--medium">Login</button>

          <Link className="auth__link margin-tb--medium" to="/signup">Create New Account</Link>
          
      </div>
    </div>
  )
}

export default Login