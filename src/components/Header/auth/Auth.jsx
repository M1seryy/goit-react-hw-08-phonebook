import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'redux/apiRequests';
import { loginUser } from 'redux/authSlice';
import { tokenSelector } from 'redux/selectors';
import styles from './auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(tokenSelector);
  console.log('auth: ', auth);

  // useEffect(() => {
  //   console.log(auth);
  // }, [dispatch, auth]);

  const postAuth = async e => {
    e.preventDefault();
    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(body);
    await createUser(body);
  };

  const loginHandler = async e => {
    e.preventDefault();
    const body = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loginUser(body));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.reg}>
        <form onSubmit={postAuth}>
          <input placeholder="name" type="text" name="regName" />
          <input placeholder="email" type="email" name="regEmail" />
          <input placeholder="password" type="password" name="regPass" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className={styles.log}>
        <form onSubmit={loginHandler}>
          <input placeholder="email" type="email" />
          <input placeholder="password" type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
