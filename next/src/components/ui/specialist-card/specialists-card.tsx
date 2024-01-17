import Link from 'next/link';
import { CardProps } from './specialists-card.constants';
import styles from './specialists-card.module.scss';
import Image from '../image';
import Button from '../button';
import { removeMarkdownTags } from '../../../utils/remove-markdown';

export default function Card({ slug, name, image, profession }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/specjalisci/${slug}`} />
      <div className={styles.imageWrap}>
        <Image data={image} />
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>{removeMarkdownTags(name)}</p>
          <p>{profession}</p>
        </div>
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
