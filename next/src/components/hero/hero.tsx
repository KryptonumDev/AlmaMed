import React from 'react';
import styles from './hero.module.scss';
import { Props } from './hero.constants';
import Button from '../ui/button';

export default function Hero({ title, text, icons, links }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p className='h4'>{text}</p>
        <ul>
          {icons.map((el) => (
            <li key={el.text}>
              {/* <img src={el.icon} alt={el.text} /> */}
              <span>{el.text}</span>
            </li>
          ))}
        </ul>
        <div>
          {links.map((link) => (
            <Button
              key={link.text}
              url={link.href}
              title={link.text}
              type='primary'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
