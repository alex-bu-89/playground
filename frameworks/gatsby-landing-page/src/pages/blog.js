import * as React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';
import PostList from '../components/Post/PostList';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <main>
        <h1>My Blog</h1>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
