import * as React from 'react';
import style from './Post.module.css';
import { Link } from 'gatsby';

const Post = ({ data }) => {
  return (
    <section className={style.post}>
      <Link to={`/blog/${data.slug}`}>
        <h2 className={style.title}>{data.title}</h2>
        <p className={style.date}>{data.date}</p>
      </Link>
    </section>
  );
};

export default Post;
