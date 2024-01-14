'use client';

import styles from './styles.module.scss';
import { Lens } from './header.icons';

export default function Search({ className }: { className?: string }) {
  return (
    <label className={`${styles.search} ${className}`}>
      <input placeholder='Szukaj' />
      <Lens />
    </label>
  );
}
