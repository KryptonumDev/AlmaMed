import React from 'react';
import styles from './localization.module.scss';
import { Props } from './localization.constants';
import { Letter, MapDot, Phone } from './localization.icons';
import ButtonBig from '../ui/button-big';

export default function Localization({
  title,
  cards,
  // ctaLink,
  ctaTitle,
}: Props) {
  cards = [
    {
      title: 'NZOZ ALMA MED sp. z o.o. – Boćki',
      address: 'ul. Grunwaldzka 1, 17-111 Boćki',
      phone: '+48 85 731 31 43',
      email: 'rejestracja@almamedbocki.pl',
    },
    {
      title: 'NZOZ ALMA MED sp. z o.o. – Bielsk podlaski',
      address: 'ul. Mickiewicza 108 A, 17-100, Bielsk Podlaski',
      phone: '+48 45 959 55 44',
      email: 'bielsk@almamedbocki.pl',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className='h3'>{title}</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div
            key={card.title}
            className={styles.item}
          >
            <div className={styles.content}>
              <h3 className='h4'>{card.title}</h3>
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
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.9912752432842!2d20.9793954!3d52.189031299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb9be566bbc15%3A0xe05d60b0c3b5bfe7!2sKryptonum%20-%20software%20house%20%7C%20aplikacje%20internetowe!5e0!3m2!1sru!2spl!4v1703243592002!5m2!1sru!2spl'
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
            title: 'Skontaktuj się z nami'
          }}
          type='secondary'
        />
      </div>
    </section>
  );
}
