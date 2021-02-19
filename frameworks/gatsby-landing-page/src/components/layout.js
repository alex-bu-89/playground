import React from 'react';
import Header from './header';
import Footer from '../components/footer';

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