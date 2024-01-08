import { transformDateFormat } from '@/components/utils/date-formatter';
import Image from '../../ui/image';
import { CardProps } from './blog-slider.constants';
import styles from './blog-slider.module.scss';
import Link from 'next/link';

export default function Card({ image, slug, title, date }: CardProps) {
  return (
    <div className={styles.card}>
      <Link
        href={`/blog/${slug}`}
        aria-label={title}
        className={styles.link}
      />
      <div className={styles.imageWrap}>
        <Image data={image} />
      </div>
      <p className={styles.date}>{transformDateFormat(date)}</p>
      <p className={`h5 ${styles.name}`}>{title}</p>
    </div>
  );
}
