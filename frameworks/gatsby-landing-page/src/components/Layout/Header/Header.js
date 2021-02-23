import React from 'react';
import { Link } from 'gatsby';

import styles from './Header.module.scss';

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className={styles.link} to={props.to}>{props.children}</Link>
  </li>
);

const Layout = () => {
  return (
    <header className={styles.header}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <nav style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </nav>
    </header>
  );
};

export default Layout;
