import React from 'react';
import styles from './tile.module.scss';
import { Props } from './tile.constants';
import Image from '../image';

export default function Tile({ color, title, icon, className }: Props) {
  return (
    <div className={`${styles.wrapper} ${styles[color]} ${className}`}>
      <Image data={icon} />
      <p>{title}</p>
    </div>
  );
}
