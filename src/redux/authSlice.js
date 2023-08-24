import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logoutUser, refresh, singUpUser } from './apiRequests';

export const loginUser = createAsyncThunk('auth/login', async user => {
  return await singUpUser(user);
});

export const logoutThunk = createAsyncThunk('auth/logout', async token => {
  return await logoutUser(token);
});

export const refreshTokenThunk = createAsyncThunk('auth/refresh', async () => {
  return await refresh();
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
    [logoutThunk.fulfilled]: state => {
      state.profile = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [refreshTokenThunk.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.profile = payload;
      state.isLoggedIn = true;
    },
    [refreshTokenThunk.rejected]: (store, { payload }) => {
      store.token = '';
    },
  },
});

export const authReudcer = authSlice.reducer;
