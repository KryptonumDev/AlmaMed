import styles from './styles.module.scss';
import { Logo } from '../../ui/logo';
import Link from 'next/link';
import { Background, Kryptonum } from './footer.icons';
import { sanityFetch } from '../../../utils/sanity-client';
import { SocialLinks } from './social-links';

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
      {
        name: 'Współpraca',
        link: '/wspolpraca',
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

type NetworkClinic = {
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
};

type FooterGlobal = {
  facebook?: string | null;
  youtube?: string | null;
  networkClinics?: NetworkClinic[];
};

export default async function Footer() {
  const { global } = await sanityFetch<{ global?: FooterGlobal }>({
    query: /* groq */ `{
      "global": *[_id == "global"][0]{
        facebook,
        youtube,
        networkClinics[]{
          name,
          shortName,
          locations[]{
            city,
            address,
            phone,
            email
          },
          url,
          isActive,
          logo{
            asset->{
              url
            }
          }
        }
      }
    }`,
  });
  const networkClinics: NetworkClinic[] = (global?.networkClinics || []).filter(
    (clinic: NetworkClinic) => clinic?.isActive !== false && clinic?.url
  );

  const getClinicLocations = (clinic: NetworkClinic) => clinic.locations || [];

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
          <SocialLinks facebook={global?.facebook} youtube={global?.youtube} />
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
          <div className={styles.linkColumns}>
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
          {networkClinics.length > 0 && (
            <div className={styles.network}>
              <h3 className='p bold'>Nasze placówki</h3>
              <div className={styles.cards}>
                {networkClinics.map((clinic) => {
                  const locations = getClinicLocations(clinic);
                  const cityLabel = Array.from(
                    new Set(locations.map((location) => location.city).filter(Boolean) as string[])
                  ).join(', ');
                  const content = (
                    <>
                      <div className={styles.cardTop}>
                        {clinic.logo?.asset?.url && (
                          <img
                            src={clinic.logo.asset.url}
                            alt={`Logo ${clinic.name}`}
                            className={styles.clinicLogo}
                          />
                        )}
                        <div>
                          <p className={`p bold ${styles.name}`}>{clinic.name}</p>
                          {cityLabel && <p className={`p ${styles.city}`}>{cityLabel}</p>}
                        </div>
                      </div>
                      {locations.map((location, index) => (
                        <div key={`${clinic.name}-${location.city || 'location'}-${index}`} className={styles.location}>
                          {location.city && <p className={`p ${styles.locationName}`}>{location.city}</p>}
                          {location.phone && <p className={`p ${styles.meta}`}>{location.phone}</p>}
                          {location.email && <p className={`p ${styles.meta}`}>{location.email}</p>}
                        </div>
                      ))}
                    </>
                  );

                  return clinic.url.startsWith('/') ? (
                    <Link key={`${clinic.name}-${clinic.url}`} href={clinic.url} className={styles.card}>
                      {content}
                    </Link>
                  ) : (
                    <a
                      key={`${clinic.name}-${clinic.url}`}
                      href={clinic.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.card}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
