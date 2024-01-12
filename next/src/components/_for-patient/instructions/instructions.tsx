'use client';
import styles from './instructions.module.scss';
import { Props } from './instructions.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';
import { useState } from 'react';

export default function Instructions({ title, text, list }: Props) {
  const [enabled, setEnabled] = useState(0);

  return (
    <section className={styles.wrapper}>
      <Markdown.h2
        className={`h3 ${styles.title}`}
        children={title}
      />
      <Markdown.p
        className={styles.text}
        children={text}
      />
      <p className={`${styles.subText} h5`}>
        Wybierz opcję poniżej, a przeprowadzimy Cię przez cały proces rejestracji!
      </p>
      <div className={styles.grid}>
        <div className={styles.buttons}>
          {list.map((el, i) => (
            <button
              onClick={() => {
                setEnabled(i);
              }}
              key={el.title + i}
            >
              {el.title}
              <span className={`${styles.button} ${enabled === i ? styles.active : ''}`} />
            </button>
          ))}
        </div>
        <div className={styles.steps}>
          {list[enabled].steps.map((el, i) => (
            <div key={el.text + i}>
              <p>
                <strong>Krok {i + 1}</strong>
                <span>{el.text}</span>
              </p>
              {el.image && <Image data={el.image} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
