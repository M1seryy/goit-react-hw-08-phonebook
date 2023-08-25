import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, refreshTokenThunk } from 'redux/authSlice';
import { tokenSelector } from 'redux/selectors';

const UserMenu = ({ data }) => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const logOut = authToken => {
    console.log('authToken', authToken);
    dispatch(logoutThunk(authToken));
  };

 

  return (
    <div>
      <p>{data.email}</p>
      <button onClick={() => logOut(token)}>Logout</button>
    </div>
  );
};

export default UserMenu;
