'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ArrowUp, Calendar, Letter, Phone } from './header.icons';
import { Logo } from '../../ui/logo';
import Search from './header-search';
import { useState } from 'react';

const links = [
  {
    label: 'Usługi',
    href: '/uslugi',
    sub: [
      { label: 'Poradnia rodzinna', href: '/uslugi/poradnia-rodzinna' },
      { label: 'Opieka koordynowana', href: '/uslugi/opieka-koordynowana' },
      { label: 'Medycyna estetyczna', href: '/uslugi/medycyna-estetyczna' },
      { label: 'Fizjoterapia', href: '/uslugi/fizjoterapia' },
    ],
  },
  { label: 'Specjaliści', href: '/specjalisci' },
  { label: 'Dla pacjenta', href: '/dla-pacjenta' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Blog', href: '/blog' },
];

export default function HeaderContent({
  book,
  phone,
  email,
  adress,
  time,
}: {
  book: string;
  phone: string;
  email: string;
  adress: string;
  time: string;
}) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`${styles.wrapper}`}>
      <a
        className={styles.hiddenLink}
        href='#main'
      >
        Przejdź do treści
      </a>
      <div className={styles.annotation}>
        <div className={styles.part}>
          <p>{adress}</p>
          <p>{time}</p>
        </div>
        <div className={`${styles.part} ${styles.desktop}`}>
          <a
            className='anim-link'
            href={book}
          >
            <Calendar />
            Umów się do lekarza
          </a>
          <a
            className='anim-link'
            href={`tel:${phone}`}
          >
            <Phone />
            {phone}
          </a>
          <a
            className='anim-link'
            href={`mailto:${email}`}
          >
            <Letter />
            {email}
          </a>
        </div>
      </div>
      <nav className={styles.navigation}>
        <Link
          className={styles.logo}
          aria-label='Strona główna'
          href='/'
        >
          <Logo />
        </Link>
        <div className={`${styles.mobileNav} ${navOpen ? styles.opened : ''}`}>
          <div className={styles.flex}>
            <Link
              className={styles.logo}
              href='/'
              aria-label='Link do strony głównej'
            >
              <Logo />
            </Link>
            <button
              aria-label='Menu mobilne'
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            />
          </div>
          <Search className={styles.mobileSearch} />
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  className='anim-link'
                  href={link.href}
                >
                  {link.label}
                  {link.sub && <ArrowUp />}
                </Link>
                {link.sub && (
                  <ul className={styles.dropdown}>
                    {link.sub.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          className='anim-link'
                          href={sub.href}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={styles.mobile}>
              <Link href='/kontakt'>
                <Calendar />
                Umów się do lekarza
              </Link>
            </li>
            <li className={styles.mobile}>
              <a href='tel:123456789'>
                <Phone />
                123 456 789
              </a>
            </li>
            <li className={styles.mobile}>
              <a href='mailto:kontakt@almamed.pl'>
                <Letter />
                kontakt@almamed.pl
              </a>
            </li>
          </ul>
        </div>
        <Search />
        <button
          aria-label='Menu mobilne'
          onClick={() => {
            setNavOpen(!navOpen);
          }}
          className={styles.navButton}
        >
          <span />
        </button>
      </nav>
    </header>
  );
}
