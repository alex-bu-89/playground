import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './Header.module.scss';

const ListLink = (props) => (
  <li className={styles.navItem}>
    <Link
      className={styles.navLink}
      activeClassName={styles.activeNavLink}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h3 style={{ display: `inline` }}>{ data.site.siteMetadata.title }</h3>
      </Link>
      <nav className={styles.nav}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </nav>
    </header>
  );
};

export default Header;
