import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext/AuthContext'

function SignUp() {

  const { signup } = useAuthContext()
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [errorvalues, seterrorvalues] = useState({})

  const validateSubmit = () => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(email.length === 0){
      errors.email = "Email Required"
    }else if(!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }

    if(password.length === 0){
      errors.password = "Password Required"
    }else if(password.length < 4){
      errors.password = "Password should be atleast 4 characters long"
    }

    if(confirmpassword!==password){
      errors.confirmpassword = "Password doesn't match"
    }

    return errors
  }

  const signUpHandler = () => {
    const errors = validateSubmit()
    if(Object.keys(errors).length === 0){
      signup({ email, password})
      setemail('')
      setpassword('')
      setconfirmpassword('')
      seterrorvalues('')
    }else{
      seterrorvalues(errors)
    }
    
  }

  return (
    <div className="auth__container">
      <div className="auth__contents border--grey">
          <h3 className="text--center margin-tb--medium">Sign Up</h3>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Email</label>
              <input value={email} onChange={(e)=> setemail(e.target.value)} type="text" className="form-field margin-tb--small" placeholder="abc@example.com"/>
              <span className="error--message">{errorvalues.email}</span>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Password</label>
              <input value={password} onChange={(e)=> setpassword(e.target.value)} type="password" className="form-field margin-tb--small" placeholder="Password"/>
              <span className="error--message">{errorvalues.password}</span>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Confirm Password</label>
              <input value={confirmpassword} onChange={(e)=> setconfirmpassword(e.target.value)} type="password" className="form-field margin-tb--small" placeholder="Password"/>
              <span className="error--message">{errorvalues.confirmpassword}</span>
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