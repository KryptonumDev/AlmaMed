
import styles from './tile.module.scss';
import { Props } from './tile.constants';
import Image from '../image';
import Link from 'next/link';
import { slugify } from '../../../utils/slugify';

export default function Tile({ color, title, icon, className, havePage, slug }: Props) {
  return (
    <div className={`${styles.wrapper} ${styles[color]} ${className} ${havePage ? styles.linked : ''}`}>
      {havePage && (
        <Link
          href={`/uslugi/${slug?.current}`}
          className={styles.link}
        />
      )}
      <Image data={icon} />
      <p>{title}</p>
    </div>
  );
}
