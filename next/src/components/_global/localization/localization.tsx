import styles from './localization.module.scss';
import { Props } from './localization.constants';
import { Letter, MapDot, Phone } from './localization.icons';
import ButtonBig from '../../ui/button-big';
import Markdown from '../../ui/markdown';

export default function Localization({ title, cards, ctaLink, ctaTitle }: Props) {
  return (
    <section className={`${styles.wrap}`}>
      <div className={styles.background}>
        <Blob />
        <div className={`${styles.wrapper} container`}>
          {title && (
            <Markdown.h2
              className='h3'
              children={title}
            />
          )}
          {cards && (
            <div className={styles.grid}>
              {cards?.map((card) => (
                <div
                  key={card.name}
                  className={styles.item}
                >
                  <div className={styles.content}>
                    <Markdown.h3
                      className='h4'
                      children={card.name}
                    />
                    <p>
                      <MapDot />
                      <span>{card.address}</span>
                      <button>Skopiuj</button>
                    </p>
                    <p>
                      <Phone />
                      <span>{card.phone}</span>
                      <button>Skopiuj</button>
                    </p>
                    <p>
                      <Letter />
                      <span>{card.email}</span>
                      <button>Skopiuj</button>
                    </p>
                  </div>
                  <iframe
                    src={card.map}
                    width='587'
                    height='388'
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title={card.name}
                  />
                </div>
              ))}
            </div>
          )}
          {ctaLink && ctaTitle && (
            <div className={styles.cta}>
              <Markdown.p
                className={`h4 ${styles.text}`}
                children={ctaTitle}
              />
              <ButtonBig
                ctaLink={{
                  url: ctaLink?.href,
                  title: ctaLink?.text,
                }}
                type='secondary'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const Blob = () => (
  <svg
    width='1400'
    height='1118'
    viewBox='0 0 1400 1118'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M622.791 23.5493C740.136 29.2412 858.882 17.2911 963.308 71.0933C1079.9 131.164 1169.94 227.427 1237.09 340.049C1320.22 479.451 1431.77 631.993 1391.51 789.208C1350.99 947.437 1198.19 1074.49 1039.27 1112.51C893.321 1147.44 769.331 1005.5 622.791 973.152C522.055 950.917 417.784 991.047 321.48 954.076C200.832 907.761 55.0196 859.694 10.9316 738.264C-33.1974 616.722 67.716 495.199 110.58 373.205C152.149 254.898 153.789 107.57 257.384 36.8523C360.558 -33.5786 497.997 17.4962 622.791 23.5493Z'
      fill='#E6EEF4'
    />
  </svg>
);
