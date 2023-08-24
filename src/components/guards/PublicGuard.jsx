import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedSelector, tokenSelector } from 'redux/selectors';

const PublicGuard = ({ children }) => {
  const isAuth = useSelector(isLoggedSelector);
  return !isAuth ? children : <Navigate to={'/'} />;
};

export default PublicGuard;
