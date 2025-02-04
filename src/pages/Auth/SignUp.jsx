import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import {TextField,Select,MenuItem} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../../features/userActions'
import {useNavigate} from 'react-router-dom'


const SignUp = () => {
   const [formData,setFormData] = useState(
      {
        name:"",
        // lastName:"",
        email:"",
        password:"",
        phone:"1111111111"
      }
    );
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.userData);
  const navigate = useNavigate();

const handleInputChange = (event)=>{

  const {name,value} = event.target
  setFormData({...formData,[name]:value})
  setErrors({ ...errors, [name]: '' });

}

const validate = ()=>{
  const newErrors = {};
  if(!formData.name) newErrors.name = 'Name is required';
  // if(!formData.lastName) newErrors.lastName = 'Last Name is required';
  if(!formData.email) newErrors.email = 'Email is required';
  if(!formData.password) newErrors.password = 'Password is required';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

const handleSubmit= async(event)=>{
  event.preventDefault()
  if (validate()) {
    dispatch(register(formData,navigate));  
    }
}
  return (
      <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField id="outlined-basic" name='name'
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}  
              helperText={errors.name}
              label="First Name" variant="outlined" className="input-field" />
          </div>
          {/* <div className="form-group">
             <TextField id="outlined-basic" name='lastName'
             value={formData.lastName}
             onChange={handleInputChange}
             error={!!errors.lastName}
             helperText={errors.lastName}
              label="Last Name" variant="outlined" className="input-field" />
          </div> */}
          <div className="form-group">
            <TextField id="outlined-basic" name='email'
              value={ formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              label="Email" variant="outlined" className="input-field" />
          </div>
          <div className="form-group">
             <TextField id="outlined-basic" name='password'
              value={formData.password}
              type='password'
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              label="Password" variant="outlined" className="input-field" />
          </div>
          <button type="submit" className="login-button">
            Sign up
          </button>
        </form>
        <Link to="/login" className='link'>Already have account?</Link>
      </div>
    </div>
  )
}

export default SignUp