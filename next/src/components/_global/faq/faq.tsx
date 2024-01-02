import React from 'react';
import styles from './faq.module.scss';
import { Props } from './faq.constants';
import Markdown from '../../ui/markdown';
import ButtonBig from '../../ui/button-big';

export default function Faq({ list, title, text, cta }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.faq}>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        {/* <div>
          {list.map((el) => (
            <details key={el.question}>
              <summary>{el.question}</summary>
              <Markdown.p
                className={styles.text}
                children={el.answer}
              />
            </details>
          ))}
        </div> */}
      </div>
      <div className={styles.column}>
        <Markdown.p
          className={`${styles.text} h5`}
          children={text}
        />
        <ButtonBig
          ctaLink={{
            url: cta.href,
            title: cta.text,
          }}
          type='primary'
        />
      </div>
    </section>
  );
}
