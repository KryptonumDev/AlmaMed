import React from 'react';
import styles from './blog-slider.module.scss';
import { Props } from './blog-slider.constants';

export default function BlogSlider({ title, text, posts }: Props) {
  return (
    <section className={styles.wrapper}>
      <h2 className='h3'>{title}</h2>
      <p>{text}</p>
      <div className={styles.grid}>
        {posts.map((el, index) => (
          <div key={index}>
            {/* image */}
            {/* date */}
            {/* title */}
          </div>
        ))}
      </div>
    </section>
  );
}
