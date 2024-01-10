
import styles from './styles.module.scss';
import { Logo } from '../../ui/logo';
import Link from 'next/link';
import { Blob, Kryptonum } from './footer.icons';

const links = [
  {
    name: 'Dla Pacjenta',
    links: [
      {
        name: 'Przychodnia rodzinna',
        link: '#',
      },
      {
        name: 'Przychodnia specjalistyczna',
        link: '#',
      },
      {
        name: 'Pozostałe usługi',
        link: '#',
      },
      {
        name: 'Polityka prywatności',
        link: '#',
      },
    ],
  },
  {
    name: 'O nas',
    links: [
      {
        name: 'Nasz personel',
        link: '#',
      },
      {
        name: 'Specjaliści',
        link: '#',
      },
      {
        name: 'Opieka koordynowana',
        link: '#',
      },
      {
        name: 'Mapa strony',
        link: '#',
      },
    ],
  },
  {
    name: 'Kontakt',
    links: [
      {
        name: 'Formularz kontaktowy',
        link: '#',
      },
      {
        name: 'Przychodnia Bocki',
        link: '#',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Blob/>
      <div className={`container ${styles.container}`}>
        <div className={styles.information}>
          <Logo className={styles.logo} />
          <div className={styles.content}>
            <h3 className='h5'>Centrum Medyczne Alma Med</h3>
            <p className='p'>W trosce o dobre zdrowie Naszych Pacjentów</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p className='p'>
            Wykonanie:{' '}
            <a
              href='https://kryptonum.eu/pl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Kryptonum/>
            </a>
          </p>
        </div>
        <div className={styles.links}>
          {links.map((link, index) => (
            <ul key={index}>
              <li className='p bold'>{link.name}</li>
              {link.links.map((sub, index) => (
                <li key={index}>
                  <Link
                    className='p'
                    href={sub.link}
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
