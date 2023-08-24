import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { tokenSelector, userSelector } from 'redux/selectors';
import styles from './header.module.css';

const Header = () => {
  const profile = useSelector(userSelector);
  const isAuth = useSelector(tokenSelector);
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link className={styles.listItem} to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to={'/contacts'}>
              Contacts
            </Link>
          </li>
          <li>
            <Link
              className={styles.listItem}
              to={isAuth !== null ? '/' : '/auth'}
            >
              Register
            </Link>
          </li>
          {/* <li>
            <Link className={styles.listItem} to={'/login'}>
              TestLogin
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className={styles.user}>
        {profile ? <UserMenu data={profile} /> : null}
      </div>
    </header>
  );
};

export default Header;
