import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ArrowUp, Calendar, Letter, Phone } from './header.icons';
import { Logo } from '../../ui/logo';
import Search from './header-search';

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
  { label: 'O nas', href: '/o-nas' },
  { label: 'Dla pacjenta', href: '/dla-pacjenta' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.annotation}>
        <div className={styles.part}>
          <p>Bielsk Podlaski | Boćki</p>
          <p>Godziny pracy: Pon – Pt: 8.00 – 18.00</p>
        </div>
        <div className={styles.part}>
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
        <Logo />
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
        </ul>
        <Search />
      </nav>
    </header>
  );
}
