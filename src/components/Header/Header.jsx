import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link className={styles.listItem} to={'/home'}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to={'/contacts'}>
              Contacts
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to={'/auth'}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
