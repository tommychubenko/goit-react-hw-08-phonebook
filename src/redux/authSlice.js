import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedin = false;
    },
    [refresh.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedin = true;
      // console.log(action.payload);
      // console.log(state.user);
    },
  },
});

export default authSlice.reducer;
