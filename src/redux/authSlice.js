import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logoutUser, singUpUser } from './apiRequests';

export const loginUser = createAsyncThunk('auth/login', async user => {
  return await singUpUser(user);
});

export const logoutThunk = createAsyncThunk('auth/logout', async token => {
  return await logoutUser(token);
});
const initialState = {
  profile: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.profile = payload.user;
      state.isLoggedIn = true;
    },
    [logoutThunk.fulfilled]: (state, { payload }) => {
      state.profile = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export const authReudcer = authSlice.reducer;
