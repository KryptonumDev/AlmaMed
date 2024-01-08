'use client';

import styles from './styles.module.scss';
import { Lens } from './header.icons';

export default function Search() {
  return (
    <label className={styles.search}>
      <input placeholder='Szukaj' />
      <Lens />
    </label>
  );
}
