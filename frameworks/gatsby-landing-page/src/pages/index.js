import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Hello.</h1>
        <h2>I'm a sub heading</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
