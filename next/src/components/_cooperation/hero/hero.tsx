import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/button';
import Image from '@/components/ui/image';
import styles from './hero.module.scss';

interface Props {
  title?: string;
  text?: string;
  image?: any;
  cta?: Array<{
    theme: 'primary' | 'secondary';
    text: string;
    href: string;
  }>;
}

export default function Hero({ title, text, image, cta }: Props) {
  if (!title && !text) return null;

  return (
    <section className={styles.wrapper}>
      <Blob className={styles.blob} />
      <div className={`${styles.content} container`}>
        <div className={styles.column}>
          {title && (
            <Markdown.h1 className={styles.title}>
              {title}
            </Markdown.h1>
          )}
          {text && (
            <Markdown.p className={`h4 ${styles.text}`}>
              {text}
            </Markdown.p>
          )}
          {!!cta?.length && (
            <div className={styles.buttons}>
              {cta.map((link) => (
                <Button
                  key={`${link.text}-${link.href}`}
                  title={link.text}
                  url={link.href}
                  type={link.theme}
                  arrow={true}
                />
              ))}
            </div>
          )}
        </div>
        {image?.asset?.url && (
          <Image className={styles.image} data={image} />
        )}
      </div>
    </section>
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M239.765 279.376C441.955 83.1011 724.538 -45.8312 999.249 17.026C1266.59 78.1962 1407.5 340.139 1544.26 577.862C1692.7 835.876 1912.96 1119.68 1789.41 1390.46C1666.36 1660.15 1290.22 1583.97 1002.23 1654.22C723.313 1722.26 429.869 1949.67 199.49 1778.31C-31.2718 1606.66 -1.9823 1268.95 5.74211 981.466C12.7134 722.011 53.5445 460.148 239.765 279.376Z'
      fill='#F9F9F9'
    />
  </svg>
);
