'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ArrowUp, Calendar, Letter, Phone } from './header.icons';
import { Logo } from '../../ui/logo';
import Search from './header-search';
import { useEffect, useMemo, useState } from 'react';

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
  { label: 'Współpraca', href: '/wspolpraca' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Blog', href: '/blog' },
];

export default function HeaderContent({
  addresses,
  networkClinics = [],
}: {
  addresses: Array<{
    book: string;
    phone: string;
    email: string;
    time: string;
    shortName: string;
  }>;
  networkClinics?: Array<{
    name: string;
    shortName: string;
    city: string;
    address?: string;
    phone?: string;
    email?: string;
    url: string;
    isActive?: boolean;
  }>;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [activeAddress, setActiveAddress] = useState(0);
  const [currentHostname, setCurrentHostname] = useState('');

  useEffect(() => {
    setCurrentHostname(window.location.hostname.toLowerCase());
  }, []);

  const visibleNetworkClinics = useMemo(
    () => networkClinics.filter((clinic) => clinic?.isActive !== false && clinic?.url),
    [networkClinics]
  );

  const isCurrentClinic = (url: string) => {
    if (!url || !currentHostname) return false;
    if (url === '/') return true;

    try {
      const clinicHostname = new URL(url).hostname.toLowerCase().replace('www.', '');
      const normalizedCurrent = currentHostname.replace('www.', '');
      return clinicHostname.includes(normalizedCurrent) || normalizedCurrent.includes(clinicHostname);
    } catch {
      return false;
    }
  };

  return (
    <header className={`${styles.wrapper}`}>
      <a
        className={styles.hiddenLink}
        href='#main'
      >
        Przejdź do treści
      </a>
      <div className={styles.annotation}>
        {visibleNetworkClinics.length > 0 && (
          <div className={styles.networkBar}>
            <p className={styles.networkLabel}>Nasze placówki:</p>
            <ul className={styles.networkList}>
              {visibleNetworkClinics.map((clinic, index) => {
                const current = isCurrentClinic(clinic.url);
                const clinicLabel = `${clinic.name} (${clinic.city})`;
                return (
                  <li key={`${clinic.name}-${clinic.url}`}>
                    {current ? (
                      <span className={styles.networkLink} data-current='true'>
                        {clinicLabel}
                      </span>
                    ) : clinic.url.startsWith('/') ? (
                      <Link className={styles.networkLink} href={clinic.url}>
                        {clinicLabel}
                      </Link>
                    ) : (
                      <a className={styles.networkLink} href={clinic.url} target='_blank' rel='noreferrer'>
                        {clinicLabel}
                      </a>
                    )}
                    {index < visibleNetworkClinics.length - 1 && <span className={styles.separator}>|</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={styles.part}>
          <p className={styles.addresses}>
            {addresses.map((el, i) => (
              <span key={el.shortName} className={styles.locationChoice}>
                {i > 0 && <span>|</span>}
                <button
                  className={i === activeAddress ? styles.active : 'underline'}
                  onClick={() => {
                    setActiveAddress(i);
                  }}
                >
                  {el.shortName}
                </button>
              </span>
            ))}
          </p>
          <p>{addresses[activeAddress].time}</p>
        </div>
        <div className={`${styles.part} ${styles.desktop}`}>
          <a
            className='anim-link'
            href={addresses[activeAddress].book}
          >
            <Calendar />
            Umów się do lekarza
          </a>
          <a
            className='anim-link'
            href={`tel:${addresses[activeAddress].phone}`}
          >
            <Phone />
            {addresses[activeAddress].phone}
          </a>
          <a
            className='anim-link'
            href={`mailto:${addresses[activeAddress].email}`}
          >
            <Letter />
            {addresses[activeAddress].email}
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
                  onClick={() => {
                    setNavOpen(false);
                  }}
                >
                  {link.label}
                  {link.sub && <ArrowUp />}
                </Link>
                {link.sub && (
                  <ul className={styles.dropdown}>
                    {link.sub.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          onClick={() => {
                            setNavOpen(false);
                          }}
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
            <li className={`${styles.addresses} ${styles.mobile}`}>
              {addresses.map((el, i) => (
                <span key={el.shortName} className={styles.locationChoice}>
                  {i > 0 && <span>|</span>}
                  <button
                    className={i === activeAddress ? styles.active : 'underline'}
                    onClick={() => {
                      setActiveAddress(i);
                    }}
                  >
                    {el.shortName}
                  </button>
                </span>
              ))}
            </li>
            <li className={styles.mobile}>
              <Link
                onClick={() => {
                  setNavOpen(false);
                }}
                href={addresses[activeAddress].book}
              >
                <Calendar />
                Umów się do lekarza
              </Link>
            </li>
            <li className={styles.mobile}>
              <a
                onClick={() => {
                  setNavOpen(false);
                }}
                href={`tel:${addresses[activeAddress].phone}`}
              >
                <Phone />
                {addresses[activeAddress].phone}
              </a>
            </li>
            <li className={styles.mobile}>
              <a
                onClick={() => {
                  setNavOpen(false);
                }}
                href={`mailto:${addresses[activeAddress].email}`}
              >
                <Letter />
                {addresses[activeAddress].email}
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
