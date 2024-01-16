'use client';
import { motion } from 'framer-motion';
import { FaqProps } from './faq.constants';
import styles from './faq.module.scss';
import { useState } from 'react';

export default function List({ list }: FaqProps) {
  const [opened, setOpened] = useState(0);

  const handleClick = (e: any, i: number) => {
    e.preventDefault();
    setOpened(i);
  };

  return (
    <div className={styles.list}>
      {list.map((el, i) => (
        <details
          key={i}
          open
          className={opened === i ? styles.opened : ''}
          data-opened={opened === i}
        >
          <summary
            onClick={(e) => handleClick(e, i)}
            tabIndex={opened === i ? -1 : 0}
          >
            <p>{el.question}</p>
            <span className={styles.plus}/>
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
  );
}
