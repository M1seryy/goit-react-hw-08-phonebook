import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateGuard = ({ children }) => {
  const isAuth = localStorage.getItem('token');
  return isAuth ? children : <Navigate to={'/'} />;
};

export default PrivateGuard;
