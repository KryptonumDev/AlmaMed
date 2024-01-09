import Link from 'next/link';
import { CardProps } from './specialists.constants';
import styles from './specialists.module.scss';
import Image from '../../ui/image';
import { removeMarkdownTags } from '@/components/utils/remove-markdown';
import Button from '../../ui/button';

export default function Card({ slug, name, image, profession }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/specjalisci/${slug}`} />
      <div className={styles.imageWrap}>
        <Image data={image} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{removeMarkdownTags(name)}</p>
        <p>{profession}</p>
        <Button
          type='secondary'
          url={`/specjalisci/${slug}`}
          arrow={true}
          title='Dowiedź się więcej'
        />
      </div>
    </div>
  );
}
