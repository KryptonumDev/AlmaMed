import { sanityFetch } from '../../utils/sanity-client';
import Search from '@/components/_global/search';
import Localization from '@/components/_global/localization';

export default async function Index({ searchParams: { wyszukiwanie } }: { searchParams: { wyszukiwanie: string } }) {
  const { categories, services, posts, specialists, localizations } = await sanityFetch<any>({
    query: `{
    "categories": *[_type == 'blogCategory']{
      name,
      slug
    },
    "services": *[_type == 'services' && have_page == true]{
      name,
      slug
    },
    "posts": *[_type == 'blogEntry']{
      name,
      slug
    },
    "specialists": *[_type == 'doctors']{
      name,
      slug
    },
    "localizations": *[_type == "localizations" && have_page == true]{
      name,
      slug
    }
  }`,
  });

  return (
    <>
      <Search
        search={wyszukiwanie}
        categories={categories}
        services={services}
        posts={posts}
        specialists={specialists}
        localizations={localizations}
      />
      <Localization
        ctaTitle='### Masz pytanie lub **potrzebujesz pomocy**? Skontaktuj się z nami – nasi specjaliści pomogą Ci najszybciej, jak to możliwe.'
        ctaLink={{
          text: 'Skontaktuj się z nami',
          href: '/kontakt',
        }}
      />
    </>
  );
}
