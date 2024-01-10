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
  { label: 'O nas', href: '/o-nas' },
  { label: 'Dla pacjenta', href: '/dla-pacjenta' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const annotation = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <div
        ref={annotation}
        className={styles.annotation}
      >
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
      <nav
        // @ts-ignore
        style={{ '--transform': (annotation?.current?.clientHeight || 0) + 'px' }}
        className={styles.navigation}
      >
        <Link className={styles.logo} href='/'>
          <Logo />
        </Link>
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
