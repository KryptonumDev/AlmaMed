import styles from './search.module.scss';
import { Props } from './search.constants';
import Search from '../header/header-search';
import Button from '@/components/ui/button';
import { removeMarkdownTags } from '../../../utils/remove-markdown';
import { useMemo } from 'react';

export default function SearchComponent({
  categories,
  specialists,
  posts,
  services,
  localizations,
  search,
  subServices,
}: Props) {
  const searchArray = [
    ...categories.map((item) => ({ ...item, type: 'Kategoria', sub: false })),
    ...specialists.map((item) => ({ ...item, type: 'Specjalista', sub: false })),
    ...posts.map((item) => ({ ...item, type: 'Artykuł', sub: false })),
    ...services.map((item) => ({ ...item, type: 'Usługa', sub: false })),
    ...localizations.map((item) => ({ ...item, type: 'Lokalizacja', sub: false })),
    ...subServices.map((item) => ({ name: item.name, slug: { current: item.link_to_description }, type: 'Usługa', sub: true })),
    {
      name: 'Strona główna',
      slug: {
        current: '/',
      },
      type: 'Strona',
      sub: false
    },
    {
      name: 'Specjaliści',
      slug: {
        current: '/specjalisci',
      },
      type: 'Strona',
      sub: false
    },
    {
      name: 'Usługi',
      slug: {
        current: '/uslugi',
      },
      type: 'Strona',
      sub: false
    },
    {
      name: 'Blog',
      slug: {
        current: '/blog',
      },
      type: 'Strona',
      sub: false
    },
    {
      name: 'Kontakt',
      slug: {
        current: '/kontakt',
      },
      type: 'Strona',
      sub: false
    },
    {
      name: 'Dla pacjenta',
      slug: {
        current: '/dla-pacjenta',
      },
      type: 'Strona',
      sub: false
    },
    {
      name: 'Polityka prywatności',
      slug: {
        current: '/polityka-prywatnosci',
      },
      type: 'Strona',
      sub: false
    },
  ];

  const urlCreator = (url: string, type: string, sub: boolean) => {
    let newUrl = url;

    switch (type) {
      case 'Kategoria':
        newUrl = `/blog/kategoria/${url}`;
        break;
      case 'Specjalista':
        newUrl = `/specjalisci/${url}`;
        break;
      case 'Artykuł':
        newUrl = `/blog/${url}`;
        break;
      case 'Usługa':
        if(sub)
          newUrl = `${url}`;
        else
          newUrl = `/uslugi/${url}`;
        break;
      case 'Lokalizacja':
        newUrl = `/${url}`;
        break;
      default:
        newUrl = `/${url}`;
        break;
    }
    return newUrl;
  };

  const filteredResults = useMemo(() => {
    if (!search) return [];

    return searchArray.filter(
      (item) =>
        item.name.toLowerCase().includes(search?.toLowerCase()) ||
        item.type.toLowerCase().includes(search?.toLowerCase())
    );
  }, [search]);

  return (
    <section className={`${styles.wrapper}`}>
      <Blob className={styles.blob} />
      <div className={`${styles.content} container`}>
        <Search />
        {search ? (
          <>
            {filteredResults.length === 0 ? (
              <p className='h4'>
                <span className='bold'>Brak wyników wyszukiwania dla:</span> {search}
              </p>
            ) : (
              <p className='h4'>
                <span className='bold'>Wyniki wyszukiwania dla:</span> {search}
              </p>
            )}
          </>
        ) : (
          <p className='h4'>Wpisz szukaną frazę</p>
        )}
        <div className={styles.result}>
          {filteredResults.map((item, index) => (
            <div
              key={index}
              className={styles.item}
            >
              <div className={styles.text}>
                <p className='h5'>{removeMarkdownTags(item.name)}</p>
                <span>{item.type}</span>
              </div>
              <Button
                url={urlCreator(item.slug.current, item.type, item.sub)}
                type='secondary'
                arrow={true}
                title='Przejdź do strony'
              />
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
