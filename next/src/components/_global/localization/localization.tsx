import React from 'react';
import styles from './localization.module.scss';
import { Props } from './localization.constants';
import { Letter, MapDot, Phone } from './localization.icons';
import ButtonBig from '../../ui/button-big';
import Markdown from '../../ui/markdown';

export default function Localization({ title, cards, ctaLink, ctaTitle }: Props) {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2
        className='h3'
        children={title}
      />
      <div className={styles.grid}>
        {cards.map((card) => (
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
            />
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <p className='h4'>{ctaTitle}</p>
        <ButtonBig
          ctaLink={{
            url: '#',
            title: 'Skontaktuj się z nami',
          }}
          type='secondary'
        />
      </div>
    </section>
  );
}
