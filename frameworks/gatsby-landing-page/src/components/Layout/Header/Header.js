import React from 'react';
import { Link } from 'gatsby';

import styles from './Header.module.scss';

const ListLink = (props) => (
  <li className={styles.navItem}>
    <Link className={styles.navLink} activeClassName={styles.activeNavLink} to={props.to}>
      {props.children}
    </Link>
  </li>
);

const Layout = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <nav className={styles.nav}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </nav>
    </header>
  );
};

export default Layout;
