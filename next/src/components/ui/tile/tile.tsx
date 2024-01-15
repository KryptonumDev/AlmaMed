import styles from './tile.module.scss';
import { Props } from './tile.constants';
import Image from '../image';
import Link from 'next/link';

export default function Tile({ color, title, icon, className, havePage, slug }: Props) {
  return (
    <div className={`${styles.wrapper} ${styles[color]} ${className} ${havePage ? styles.linked : ''}`}>
      {havePage && (
        <Link
          aria-label={title}
          href={`/uslugi/${slug?.current}`}
          className={styles.link}
        />
      )}
      <Image data={icon} />
      <p>{title}</p>
      {havePage && (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M22.4508 9.11612C22.9389 8.62796 23.7304 8.62796 24.2185 9.11612L34.2185 19.1161C34.7067 19.6043 34.7067 20.3957 34.2185 20.8839L24.2185 30.8839C23.7304 31.372 22.9389 31.372 22.4508 30.8839C21.9626 30.3957 21.9626 29.6043 22.4508 29.1161L30.3169 21.25H6.66797C5.97761 21.25 5.41797 20.6904 5.41797 20C5.41797 19.3096 5.97761 18.75 6.66797 18.75H30.3169L22.4508 10.8839C21.9626 10.3957 21.9626 9.60427 22.4508 9.11612Z'
            fill='#404346'
          />
        </svg>
      )}
    </div>
  );
}
