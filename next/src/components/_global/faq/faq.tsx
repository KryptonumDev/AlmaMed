'use client';
import styles from './faq.module.scss';
import { Props } from './faq.constants';
import Markdown from '../../ui/markdown';
import ButtonBig from '../../ui/button-big';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Faq({ list, title, text, cta }: Props) {
  const [opened, setOpened] = useState(0);

  const handleClick = (e: any, i: number) => {
    e.preventDefault();
    setOpened(i);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.faq}>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <div className={styles.list}>
          {list.map((el, i) => (
            <details
              key={i}
              open
              data-opened={opened === i}
            >
              <summary
                onClick={(e) => handleClick(e, i)}
                tabIndex={opened === i ? -1 : 0}
              >
                <p>{el.question}</p>
              </summary>
              <motion.div
                className={styles.answer}
                initial={i === 0 ? { height: 'auto', marginBottom: '24px' } : { height: 0, marginBottom: 0 }}
                animate={opened === i ? { height: 'auto', marginBottom: '24px' } : { height: 0, marginBottom: 0 }}
                exit={{ height: 0, marginBottom: '0' }}
                dangerouslySetInnerHTML={{ __html: el.answer }}
              />
            </details>
          ))}
        </div>
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
