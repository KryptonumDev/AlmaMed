import React from 'react';
import styles from './advantages.module.scss';
import { Props } from './advantages.constants';
import { Certificate } from './advantages.icons';

export default function Advantages({ title, text, advantages }: Props) {
  advantages = [
    {
      title: 'Opieka koordynowana',
      text: 'Jako jedna z pierwszych przychodni w Polsce oferujemy Opiekę Koordynowaną –  innowacyjny model opieki nad pacjentami z chorobami przewlekłymi.',
    },
    {
      title: 'Dyspozycyjność',
      text: 'Twój komfort jest dla nas ważny, dlatego stawiamy na sprawną organizację pracy, aby zminimalizować czas oczekiwania na wizytę.',
    },
    {
      title: 'Udogodnienia',
      text: 'Chcemy maksymalnie ułatwić wszystkim korzystanie z opieki zdrowotnej, dlatego nasza przychodnia jest w pełni dostosowana do osób niepełnosprawnych.',
    },
    {
      title: 'Wizyty bez kolejki',
      text: 'Oferujemy możliwość wygodnego umawiania wizyt poprzez wypełnienie e-formularza lub kontakt telefoniczny. Pacjentów zapisujemy na konkretną godzinę, dzięki czemu nie musisz już stać w kolejce do specjalisty!',
    },
    {
      title: 'Łatwy kontakt',
      text: 'Problem z dodzwonieniem się? W ALMA MED nie musisz się o to obawiać! Nasza przychodnia ma aż 92% odebranych połączeń. Posiadamy także system call-back, dzięki któremu oddzwaniamy w 15 minut!',
    },
    {
      title: 'Doświadczenie',
      text: 'W ALMA MED ciągle poszerzamy swoją wiedzę i umiejętności. Znajdziesz u nas specjalistów z różnych dziedzin medycyny – m.in. lekarzy rodzinnych, radiologów, dietetyków czy fizjoterapeutów.',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.text}>
          <h2 className='h3'>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.certificate}>
          <Certificate />
          <p>
            Posiadamy <strong>Certyfikat Jakości Ministra Zdrowia</strong>
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {advantages.map((advantage) => (
          <div
            className={styles.item}
            key={advantage.title}
          >
            <h3 className='h5'>{advantage.title}</h3>
            <p>{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
