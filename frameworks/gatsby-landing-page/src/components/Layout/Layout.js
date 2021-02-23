import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../styles/index.scss';

const Layout = ({ children }) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1024, padding: `0 1rem` }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;