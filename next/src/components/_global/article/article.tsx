import styles from './article.module.scss';
import { Props } from './article.constants';
import Image from '@/components/ui/image';
import Link from 'next/link';
import { slugify } from '../../../utils/slugify';
import Markdown from '@/components/ui/markdown';
import PortableTextComponent from './portable-text';

export default function Article({ brief, name, content, thumbnail }: Props) {
  const titles = content
    .filter((item: any) => item._type === 'block' && item.style === 'h2')
    .map((el: any) => el.children[0].text);

  return (
    <>
      <div className={styles.blobWrap}>
        <Blob className={styles.blob} />
      </div>
      <section className={`${styles.wrapper}`}>
        <div className={`${styles.wrap} container`}>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image data={thumbnail} />
            </div>
            <Markdown.h1
              className='h3'
              children={name}
            />
            <p>{brief}</p>
            <PortableTextComponent data={content} />
          </div>
          <div className={styles.quickLinks}>
            <div className={styles.quickLinksHeading}>
              <p className='p'>Spis treści:</p>
            </div>
            <div className={styles.quickLinksList}>
              {titles?.map((title: string, index: number) => (
                <Link
                  key={title + index}
                  href={`#${slugify(title)}`}
                  className={`p`}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Blob = ({ className }: { className: string }) => (
  <svg
    width='1826'
    height='1841'
    viewBox='0 0 1826 1841'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      id='Vector'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M239.765 279.376C441.955 83.1011 724.538 -45.8312 999.249 17.026C1266.59 78.1962 1407.5 340.139 1544.26 577.862C1692.7 835.876 1912.96 1119.68 1789.41 1390.46C1666.36 1660.15 1290.22 1583.97 1002.23 1654.22C723.313 1722.26 429.869 1949.67 199.49 1778.31C-31.2718 1606.66 -1.9823 1268.95 5.74211 981.466C12.7134 722.011 53.5445 460.148 239.765 279.376Z'
      fill='#F9F9F9'
    />
  </svg>
);
