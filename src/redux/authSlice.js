import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { singUpUser } from './apiRequests';

export const loginUser = createAsyncThunk('auth/login', async user => {
  return await singUpUser(user);
});

const authSlice = createSlice({
  name: 'auth',
  authState: {
    token: '',
    profile: null,
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(state);
      state.token = payload.token;
      state.profile = payload.user;
    },
  },
});

export const authReudcer = authSlice.reducer;
