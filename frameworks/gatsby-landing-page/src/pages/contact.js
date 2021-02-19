import * as React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <main>
        <h1>Contact</h1>
        <p>
          The best way to reach me is via{' '}
          <a href="https://twitter.com/foobar">@foobar</a> on Twitter!.
        </p>
      </main>
    </Layout>
  );
};

export default ContactPage;
