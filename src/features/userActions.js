import {requestStart,requestFailure,signupSuccess,loginSuccess} from './userSlice'
import axiosInstance from '../utils/axiosInstance'



export const register = (userDetails,navigate)=> async(dispatch)=>{
dispatch(requestStart())
try{
    const response = await axiosInstance.post('/users/register', userDetails);
    console.log(response)
    if(response.status === 200){
        navigate('/login')
    }

    dispatch(signupSuccess(response.data.message));
}catch (error){
    dispatch(requestFailure(error.response?.data?.message || 'Signup failed'));
}
}

export const login = (credentials, navigate) => async (dispatch) => {
  dispatch(requestStart());
  try {
    const response = await axiosInstance.post('/users/login', credentials);
    const { user, token, userid} = response.data;
    localStorage.setItem('token', token);
    dispatch(loginSuccess({ user, token,userid }));
    navigate('/');
  } catch (error) {
    dispatch(requestFailure(error.response?.data?.message || 'Login failed'));
  }
};