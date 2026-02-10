'use client';

import { useEffect, useMemo, useState } from 'react';
import Markdown from '@/components/ui/markdown';
import styles from './network.module.scss';

interface NetworkClinic {
  name: string;
  shortName?: string;
  city: string;
  address?: string;
  phone?: string;
  email?: string;
  url: string;
  isActive?: boolean;
  logo?: {
    asset?: {
      url?: string;
    };
  };
}

interface Props {
  title?: string;
  text?: string;
  clinics?: NetworkClinic[];
}

export default function Network({ title, text, clinics = [] }: Props) {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    setHostname(window.location.hostname.toLowerCase());
  }, []);

  const visibleClinics = useMemo(
    () => clinics.filter((clinic) => clinic?.isActive !== false && clinic?.url),
    [clinics]
  );

  if (!title && !visibleClinics.length) return null;

  const isCurrentSite = (url: string) => {
    if (!url || !hostname) return false;
    if (url === '/') return true;
    try {
      const clinicHostname = new URL(url).hostname.toLowerCase().replace('www.', '');
      const normalized = hostname.replace('www.', '');
      return clinicHostname.includes(normalized) || normalized.includes(clinicHostname);
    } catch {
      return false;
    }
  };

  return (
    <section id='siec-placowek' className={styles.wrapper}>
      <div className='container'>
        {title && (
          <Markdown.h2 className='h3'>
            {title}
          </Markdown.h2>
        )}
        {text && (
          <Markdown.p className={styles.text}>
            {text}
          </Markdown.p>
        )}
        {visibleClinics.length > 0 && (
          <div className={styles.grid}>
            {visibleClinics.map((clinic, index) => {
              const isCurrent = isCurrentSite(clinic.url);
              const variant = String((index % 3) + 1);
              const content = (
                <>
                  <div className={styles.heading}>
                    {clinic.logo?.asset?.url && (
                      <img src={clinic.logo.asset.url} alt={`Logo ${clinic.name}`} className={styles.logo} />
                    )}
                    <div>
                      <p className={`p bold ${styles.name}`}>{clinic.name}</p>
                      <p className={`p ${styles.city}`}>{clinic.city}</p>
                    </div>
                  </div>
                  {clinic.address && <p className={`p ${styles.meta}`}>{clinic.address}</p>}
                  {clinic.phone && <p className={`p ${styles.meta}`}>{clinic.phone}</p>}
                  {clinic.email && <p className={`p ${styles.meta}`}>{clinic.email}</p>}
                  {isCurrent && <p className={styles.current}>Aktualnie przeglądasz</p>}
                </>
              );

              if (isCurrent) {
                return (
                  <div
                    key={`${clinic.name}-${clinic.url}`}
                    className={`${styles.card} ${styles.active}`}
                    data-variant={variant}
                  >
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={`${clinic.name}-${clinic.url}`}
                  className={styles.card}
                  href={clinic.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  data-variant={variant}
                >
                  {content}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
