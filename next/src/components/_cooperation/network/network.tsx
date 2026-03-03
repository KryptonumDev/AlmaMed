'use client';

import { useEffect, useMemo, useState } from 'react';
import Markdown from '@/components/ui/markdown';
import styles from './network.module.scss';

interface NetworkClinic {
  name: string;
  shortName?: string;
  locations?: Array<{
    city?: string;
    address?: string;
    phone?: string;
    email?: string;
  }>;
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

  const getClinicLocations = (clinic: NetworkClinic) => clinic.locations || [];

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
              const locations = getClinicLocations(clinic);
              const cityLabel = Array.from(
                new Set(locations.map((location) => location.city).filter(Boolean) as string[])
              ).join(', ');
              const content = (
                <>
                  <div className={styles.heading}>
                    {clinic.logo?.asset?.url && (
                      <img src={clinic.logo.asset.url} alt={`Logo ${clinic.name}`} className={styles.logo} />
                    )}
                    <div>
                      <p className={`p bold ${styles.name}`}>{clinic.name}</p>
                      {cityLabel && <p className={`p ${styles.city}`}>{cityLabel}</p>}
                    </div>
                  </div>
                  {locations.map((location, locationIndex) => (
                    <div key={`${clinic.name}-${location.city || 'location'}-${locationIndex}`} className={styles.location}>
                      {location.city && <p className={`p ${styles.locationName}`}>{location.city}</p>}
                      {location.address && <p className={`p ${styles.meta}`}>{location.address}</p>}
                      {location.phone && <p className={`p ${styles.meta}`}>{location.phone}</p>}
                      {location.email && <p className={`p ${styles.meta}`}>{location.email}</p>}
                    </div>
                  ))}
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
