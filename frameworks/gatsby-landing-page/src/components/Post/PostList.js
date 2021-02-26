import * as React from 'react';
import Post from './Post';

const toKebabCase = (str) => {
  return str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

const PostList = ({ posts }) => {
  return posts.map((post) => {
    const postMeta = post.node.frontmatter;
    const slug = post.node.fields.slug;
    const postData = { ...postMeta, ...{ slug } };
    return <Post data={postData} key={`${toKebabCase(postMeta.title)}`} />;
  });
};

export default PostList;
