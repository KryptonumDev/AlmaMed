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
    <section className={`${styles.wrapper} container`}>
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
    </section>
  );
}
