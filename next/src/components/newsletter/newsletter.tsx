import React from 'react';
import styles from './newsletter.module.scss';
import Button from '../ui/button';
import Form from './newsletter-form';
import { Props } from './newsletter.constants';
import Image from '../ui/image';
import Markdown from '../ui/markdown';

export default function Newsletter({ content, title, text, icon, link }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <Image data={icon} />
        <div>
          <Markdown.p
            className='h4'
            children={content}
          />
          <Button
            arrow={true}
            title={link.text}
            url={link.href}
            type={link.theme}
          />
        </div>
      </div>
      <div className={styles.right}>
        <Markdown.h2
          className='h3'
          children={title}
        />
        <Markdown.p children={text} />
        <Form />
      </div>
    </section>
  );
}
