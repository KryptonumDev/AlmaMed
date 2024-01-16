import styles from './styles.module.scss';
import { Logo } from '../../ui/logo';
import Link from 'next/link';
import { Background, Blob, Kryptonum } from './footer.icons';

const links = [
  {
    name: 'Usługi',
    links: [
      { name: 'Poradnia rodzinna', link: '/uslugi/poradnia-rodzinna' },
      { name: 'Opieka koordynowana', link: '/uslugi/opieka-koordynowana' },
      { name: 'Medycyna estetyczna', link: '/uslugi/medycyna-estetyczna' },
      { name: 'Pozostałe usługi', link: '/uslugi/' },
    ],
  },
  {
    name: 'O nas',
    links: [
      {
        name: 'Nasz personel',
        link: '/specjalisci',
      },
      {
        name: 'Dla pacjenta',
        link: '/dla-pacjenta',
      },
      {
        name: 'Mapa strony',
        link: '/mapa-strony',
      },
    ],
  },
  {
    name: 'Kontakt',
    links: [
      {
        name: 'Formularz kontaktowy',
        link: '/kontakt',
      },
      {
        name: 'Przychodnia Bocki',
        link: '/nzoz-alma-med-sp-z-o-o-bocki',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      {/* <Blob/> */}
      <Background />
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
              aria-label='Link do strony Kryptonum'
            >
              <Kryptonum />
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
