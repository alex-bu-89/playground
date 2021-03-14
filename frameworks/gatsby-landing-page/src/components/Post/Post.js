import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './Post.module.scss';

const Post = ({ data }) => {
  return (
    <section className={styles.post}>
      <Link to={`/blog/${data.slug}`}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.date}>{data.date}</p>
      </Link>
    </section>
  );
};

export default Post;
