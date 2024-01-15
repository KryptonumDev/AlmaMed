'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ArrowUp, Calendar, Letter, Phone } from './header.icons';
import { Logo } from '../../ui/logo';
import Search from './header-search';
import { useEffect, useRef, useState } from 'react';

const links = [
  {
    label: 'Usługi',
    href: '/uslugi',
    sub: [
      { label: 'Medycyna rodzinna', href: '/uslugi/' },
      { label: 'Medycyna specjalistyczna', href: '/uslugi/' },
      { label: 'Opieka koordynowana', href: '/uslugi/' },
      { label: 'Pozostałe usługi', href: '/uslugi/' },
    ],
  },
  { label: 'Dla pacjenta', href: '/dla-pacjenta' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`${styles.wrapper}`}>
      <div className={styles.annotation}>
        <div className={styles.part}>
          <p>Bielsk Podlaski | Boćki</p>
          <p>Godziny pracy: Pon – Pt: 8.00 – 18.00</p>
        </div>
        <div className={`${styles.part} ${styles.desktop}`}>
          <Link href='/kontakt'>
            <Calendar />
            Umów się do lekarza
          </Link>
          <a href='tel:123456789'>
            <Phone />
            123 456 789
          </a>
          <a href='mailto:kontakt@almamed.pl'>
            <Letter />
            kontakt@almamed.pl
          </a>
        </div>
      </div>
      <nav className={styles.navigation}>
        <Link
          className={styles.logo}
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
                <Link href={link.href}>
                  {link.label}
                  {link.sub && <ArrowUp />}
                </Link>
                {link.sub && (
                  <ul className={styles.dropdown}>
                    {link.sub.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href}>{sub.label}</Link>
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
