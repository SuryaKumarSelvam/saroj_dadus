import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    userId:localStorage.getItem('userId'),
    loading: false,
    error: null,
    successMessage: null,

}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        requestStart: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.userid;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('userId',action.payload.userid);
      localStorage.setItem('token', action.payload.token);
    },
    requestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    },
    }
})

export const {
  requestStart,
  signupSuccess,
  loginSuccess,
  requestFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;