import React from 'react';
import styles from './button-big.module.scss';
import { Props } from './button-big.constants';
import { ArrowRight } from './button-big.icons';
import Link from 'next/link';

export default function ButtonBig({ ctaLink, type }: Props) {
  return (
    <Link
      className={`${styles.wrapper} ${styles[type]}`}
      href={ctaLink.url}
    >
      <ArrowRight />
      <span>{ctaLink.title}</span>
    </Link>
  );
}
