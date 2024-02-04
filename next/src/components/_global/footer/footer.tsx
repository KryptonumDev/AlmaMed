import styles from './styles.module.scss';
import { Logo } from '../../ui/logo';
import Link from 'next/link';
import { Background, Blob, Kryptonum } from './footer.icons';

const links = [
  {
    name: 'Usługi',
    link: '/uslugi',
    links: [
      { name: 'Poradnia rodzinna', link: '/uslugi/poradnia-rodzinna' },
      { name: 'Opieka koordynowana', link: '/uslugi/opieka-koordynowana' },
      { name: 'Medycyna estetyczna', link: '/uslugi/medycyna-estetyczna' },
      { name: 'Fizjoterapia', link: '/uslugi/fizjoterapia' },
      { name: 'Polityka prywatności', link: '/polityka-prywatnosci' },
    ],
  },
  {
    name: 'Specjaliści',
    link: '/specjalisci',
    links: [
      {
        name: 'Dla pacjenta',
        link: '/dla-pacjenta',
        bold: true,
      },
      {
        name: 'Blog',
        link: '/blog',
        bold: true,
      },
      {
        name: 'Mapa strony',
        link: '/mapa-strony',
      },
    ],
  },
  {
    name: 'Kontakt',
    link: '/kontakt',
    links: [
      {
        name: 'Wyszukiwarka',
        link: '/wyszukiwarka',
        bold: true,
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
      <Background />
      <div className={`container ${styles.container}`}>
        <div className={styles.information}>
          <Link aria-label='Strona główna' href='/'>
            <Logo className={styles.logo} />
          </Link>
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
              <li className='p bold'>
                <Link
                  className={`p anim-link bold`}
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
              {link.links.map((sub, index) => (
                <li key={index}>
                  <Link
                    className={`p anim-link ${sub.bold ? 'bold' : ''}`}
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
