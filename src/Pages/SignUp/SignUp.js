import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext/AuthContext'

function SignUp() {

  const { signup } = useAuthContext()
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const signUpHandler = () => {
    signup({ email, password})
    setemail('')
    setpassword('')
  }

  return (
    <div className="auth__container">
      <div className="auth__contents border--grey">
          <h3 className="text--center margin-tb--medium">Sign Up</h3>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Email</label>
              <input value={email} onChange={(e)=> setemail(e.target.value)} type="text" className="form-field margin-tb--small" placeholder="abc@example.com"/>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Password</label>
              <input value={password} onChange={(e)=> setpassword(e.target.value)} type="password" className="form-field margin-tb--small" placeholder="Password"/>
          </div>
          <div className="auth__description">
              <input type="checkbox" className="form-checkbox" /> 
              <span>I accept all Terms and Conditions </span>
          </div>
          <button onClick={signUpHandler} className="btn btn-auth margin-bottom--medium">Sign Up</button>

          <Link className="auth__link margin-tb--medium" to="/login">Already have an account</Link>
          
      </div>
    </div>
  )
}

export default SignUp