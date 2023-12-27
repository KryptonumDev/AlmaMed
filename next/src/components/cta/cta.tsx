import React from 'react';
import styles from './cta.module.scss';
import { Props } from './cta.constants';
import ButtonBig from '../ui/button-big';

export default function Cta({ title, text }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className='h3'>{title}</h2>
        <p>{text}</p>
      </div>
      <ButtonBig
        ctaLink={{
          url: '#',
          title: 'Skontaktuj się z nami',
        }}
        type='primary'
      />
    </section>
  );
}
