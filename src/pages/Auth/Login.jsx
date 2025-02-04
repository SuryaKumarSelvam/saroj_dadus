import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import {TextField,Select,MenuItem} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../features/userActions'
import toast,{Toaster} from 'react-hot-toast'

const Login = () => {
  const [formData,setFormData] = useState(
      {
        email:"",
        password:"",
      }
    );
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.userData);



  
const validate = ()=>{
  const newErrors = {};
  if(!formData.email) newErrors.email = 'Email is required';
  if(!formData.password) newErrors.password = 'Password is required';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

const handleInputChange = (event)=>{

  const {name,value} = event.target
  setFormData({...formData,[name]:value})
  setErrors({ ...errors, [name]: '' });

}

 const handleSubmit = (event) => {
    event.preventDefault()
      if (validate()) {
        dispatch(login(formData,navigate));  
        }
  };
  return (
     <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
             <TextField id="outlined-basic" name='email'
                          value={formData.email}
                          onChange={handleInputChange}
                          error={!!errors.email}  
                          helperText={errors.email}
                          label="Email" variant="outlined" className="input-field" />
          </div>
          <div className="form-group">
            <TextField id="outlined-basic" name='password'
                          value={formData.password}
                          type="password"
                          onChange={handleInputChange}
                          error={!!errors.password}  
                          helperText={errors.password}
                          label="Password" variant="outlined" className="input-field" />
          </div>
          <a href="/forgot-password" className="forgot-password">
            Forgot your password?
          </a>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <Link to="/signup" className='link'>Sign up</Link>
      </div>
      <Toaster />
    </div>
  )
}

export default Login