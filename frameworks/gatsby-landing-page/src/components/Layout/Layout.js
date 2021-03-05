import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import '../../styles/index.scss';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
