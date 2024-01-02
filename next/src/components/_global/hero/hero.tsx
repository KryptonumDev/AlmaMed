import React from 'react';
import styles from './hero.module.scss';
import { Props } from './hero.constants';
import Button from '../../ui/button';
import Image from '../../ui/image';
import Markdown from '../../ui/markdown';

export default function Hero({ title, text, list, cta, image }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Markdown.h1
          className={styles.title}
          children={title}
        />
        <Markdown.p
          className={`h4 ${styles.text}`}
          children={text}
        />
        <ul className={styles.list}>
          {list.map((el) => (
            <li key={el.text}>
              <Image data={el.icon} />
              <span>{el.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          {cta.map((link) => (
            <Button
              key={link.text}
              url={link.href}
              title={link.text}
              type={link.theme}
            />
          ))}
        </div>
      </div>
      <Image
        className={styles.image}
        data={image}
      />
    </section>
  );
}
