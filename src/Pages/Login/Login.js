import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context';
import './Auth.css';

function Login() {

  const { signIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [ ErrorValues, setErrorValues] = useState({})

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
    }

    return errors
  }

  const loginhandler = () => {
    const errors = validateSubmit()
    if(Object.keys(errors).length === 0){
      signIn({ email, password})
      setEmail('')
      setPassword('')
      setErrorValues({})
    }else{
      setErrorValues(errors)
    }
    
  }

  const loginwithtesthandler = () => {
    signIn({ email: 'adarshbalika@gmail.com', password: 'adarshbalika'})
    setEmail('')
    setPassword('')
  }

  return (
    <div className="auth__container">
      <div className="auth__contents border--grey">
          <h3 className="text--center margin-tb--medium">Login</h3>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Email</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-field margin-tb--small" placeholder="abc@example.com"/>
              <span className="error--message">{ErrorValues.email}</span>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-field margin-tb--small" placeholder="Password"/>
              <span className="error--message">{ErrorValues.password}</span>
          </div>
          <button onClick={loginhandler} className="btn btn-auth margin-bottom--medium">Login</button>
          <button onClick={loginwithtesthandler} className="btn btn-auth margin-bottom--medium">Login with test credentials</button>

          <Link className="auth__link margin-tb--medium" to="/signup">Create New Account</Link>
          
      </div>
    </div>
  )
}

export { Login }