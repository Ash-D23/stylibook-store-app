import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext/AuthContext';
import './Auth.css';

function Login() {

  const { signin } = useAuthContext();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const loginhandler = () => {
    signin({ email, password})
    setemail('')
    setpassword('')
  }

  return (
    <div className="auth__container">
      <div className="auth__contents border--grey">
          <h3 className="text--center margin-tb--medium">Login</h3>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Email</label>
              <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className="form-field margin-tb--small" placeholder="abc@example.com"/>
          </div>
          <div className="auth__section">
              <label className="auth-label form-label--required text--medium">Enter Password</label>
              <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-field margin-tb--small" placeholder="Password"/>
          </div>
          <button onClick={loginhandler} className="btn btn-auth margin-bottom--medium">Login</button>

          <Link className="auth__link margin-tb--medium" to="/signup">Create New Account</Link>
          
      </div>
    </div>
  )
}

export default Login