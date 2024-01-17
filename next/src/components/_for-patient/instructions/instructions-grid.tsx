'use client';
import { GridProps } from './instructions.constants';
import Image from '@/components/ui/image';
import { useState } from 'react';
import styles from './instructions.module.scss';

export default function Grid({ list }: GridProps) {
  const [enabled, setEnabled] = useState(0);

  return (
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
      <div className={`${styles.steps} ${enabled % 2 === 0 ? styles.green : styles.yellow}`}>
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
  );
}
