import * as React from 'react';
import style from './Post.module.css';

const Post = ({ data }) => {
  return (
    <section className={style.post}>
      <h2 className={style.title}>{data.title}</h2>
      <p className={style.date}>{data.date}</p>
    </section>
  );
};

export default Post;
