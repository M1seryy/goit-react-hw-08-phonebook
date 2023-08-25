import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from 'redux/apiRequests';
import { loginUser } from 'redux/authSlice';
import styles from './auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postAuth = async e => {
    e.preventDefault();
    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(body);
    await createUser(body);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };

  const loginHandler = async e => {
    e.preventDefault();
    const body = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loginUser(body))
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(err => alert('Login or password is not valid'));
    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.reg}>
        <form onSubmit={postAuth}>
          <input placeholder="name" type="text" name="regName" />
          <input placeholder="email" type="email" name="regEmail" />
          <input placeholder="password" type="password" name="regPass" />
          <button type="submit">Registration</button>
        </form>
      </div>
      <div className={styles.log}>
        <form onSubmit={loginHandler}>
          <input placeholder="email" type="email" />
          <input placeholder="password" type="text" />
          <button type="submit">LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
