import styles from './page-map.module.scss';
import { Props } from './page-map.constants';
import Link from 'next/link';
import { removeMarkdownTags } from '../../../utils/remove-markdown';

export default function PageMap({ categories, specialists, posts, services, localizations }: Props) {
  const structuredData = [
    {
      link: {
        name: 'Strona główna',
        href: '/',
      },
      subLinks: localizations.map((el) => ({
        name: el.name,
        href: `/${el.slug.current}`,
      })),
    },
    {
      link: {
        name: 'Usługi',
        href: '/uslugi',
      },
      subLinks: services.map((el) => ({
        name: el.name,
        href: `/uslugi/${el.slug.current}`,
      })),
    },
    {
      link: {
        name: 'Personel',
        href: '/specjalisci',
      },
      subLinks: specialists.map((el) => ({
        name: el.name,
        href: `/specjalisci/${el.slug.current}`,
      })),
    },
    {
      link: {
        name: 'Blog',
        href: '/blog',
      },
      subLinks: [
        ...categories.map((el) => ({
          name: el.name,
          href: `/blog/kategoria/${el.slug.current}`,
        })),
        ...posts.map((el) => ({
          name: el.name,
          href: `/blog/${el.slug.current}`,
        })),
      ],
    },
    {
      link: {
        name: 'Kontakt',
        href: '/kontakt',
      },
      subLinks: [],
    },
    {
      link: {
        name: 'Polityka prywatności',
        href: '/polityka-prywatnosci',
      },
      subLinks: [],
    },
    {
      link: {
        name: 'Dla pacjenta',
        href: '/dla-pacjenta',
      },
      subLinks: [],
    },
    {
      link: {
        name: '404',
        href: '/404',
      },
      subLinks: [],
    },
  ];

  return (
    <section className={`${styles.wrapper}`}>
      <Blob className={styles.blob} />
      <div className='container'>
        <h1>Mapa strony</h1>
        <div className={styles.grid}>
          {structuredData.map((el, index) => (
            <div
              key={el.link.name + index}
              className={styles.item}
            >
              <Link
                className='h4'
                href={el.link.href}
              >
                {el.link.name}
              </Link>
              {el.subLinks.length > 0 && (
                <div className={styles.box}>
                  {el.subLinks.map((subEl) => (
                    <Link
                      className='h5'
                      href={subEl.href}
                    >
                      {removeMarkdownTags(subEl.name)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Blob = ({ className }: { className: string }) => (
  <svg
    width='1826'
    height='1841'
    viewBox='0 0 1826 1841'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      id='Vector'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M239.765 279.376C441.955 83.1011 724.538 -45.8312 999.249 17.026C1266.59 78.1962 1407.5 340.139 1544.26 577.862C1692.7 835.876 1912.96 1119.68 1789.41 1390.46C1666.36 1660.15 1290.22 1583.97 1002.23 1654.22C723.313 1722.26 429.869 1949.67 199.49 1778.31C-31.2718 1606.66 -1.9823 1268.95 5.74211 981.466C12.7134 722.011 53.5445 460.148 239.765 279.376Z'
      fill='#F9F9F9'
    />
  </svg>
);
