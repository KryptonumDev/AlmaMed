import React from 'react';
import styles from './freebie.module.scss';
import { Props } from './freebie.constants';
import Image from '../../ui/image';
import Markdown from '../../ui/markdown';
import Form from '../../_global/newsletter/newsletter-form';

export default function Freebie({ title, text, image }: Props) {
  return (
    <section className={styles.wrapper}>
      <div>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <Markdown.p
          className={styles.text}
          children={text}
        />
        <Form/>
      </div>
      <Image data={image} />
    </section>
  );
}
