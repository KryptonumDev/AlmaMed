import styles from './hero.module.scss';
import { Props } from './hero.constants';
import Button from '../../ui/button';
import Image from '../../ui/image';
import Markdown from '../../ui/markdown';

export default function Hero({ title, text, list, cta, image }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.wrap} container`}>
        <div className={styles.content}>
          <Markdown.h1
            className={styles.title}
            children={title}
          />
          <Markdown.p
            className={`h4 ${styles.text}`}
            children={text}
          />
          <ul className={styles.list}>
            {list?.map((el) => (
              <li key={el.text}>
                <Image data={el.icon} />
                <span>{el.text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.buttons}>
            {cta?.map((link) => (
              <Button
                key={link.text}
                url={link.href}
                title={link.text}
                type={link.theme}
                arrow={true}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <svg
          width='1826'
          height='1841'
          viewBox='0 0 1826 1841'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Vector'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M239.765 279.376C441.955 83.1011 724.538 -45.8312 999.249 17.026C1266.59 78.1962 1407.5 340.139 1544.26 577.862C1692.7 835.876 1912.96 1119.68 1789.41 1390.46C1666.36 1660.15 1290.22 1583.97 1002.23 1654.22C723.313 1722.26 429.869 1949.67 199.49 1778.31C-31.2718 1606.66 -1.9823 1268.95 5.74211 981.466C12.7134 722.011 53.5445 460.148 239.765 279.376Z'
            fill='#F9F9F9'
          />
          <clipPath id='cp'>
            <use href='#Vector' />
          </clipPath>
          <image
            clipPath='url(#cp)'
            href={image.asset.url}
            width={image.asset.metadata.dimensions.width + 'px'}
            height={image.asset.metadata.dimensions.height}
            x='55%'
            y='55%'
          />
        </svg>
      </div>
    </section>
  );
}
