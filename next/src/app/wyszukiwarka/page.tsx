import { sanityFetch } from '../../utils/sanity-client';
import Search from '@/components/_global/search';
import Localization from '@/components/_global/localization';
import Seo from '@/components/ui/seo';

export default async function Index({ searchParams: { wyszukiwanie } }: { searchParams: { wyszukiwanie: string } }) {
  const { categories, services, posts, specialists, localizations, subServices } = await sanityFetch<any>({
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
    "specialists": *[_type == 'doctors'] | order(order asc){
      name,
      slug
    },
    "localizations": *[_type == "localizations" && have_page == true]{
      name,
      slug
    },
    "subServices": *[_type == 'services' && have_page == false]{
      name,
      link_to_description,
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
        subServices={subServices}
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

export async function generateMetadata() {
  const {
    page: { seo },
  } = await sanityFetch<any>({
    query: `
      {
        "page": *[_id == "Search"][0]{
          seo {
            title,
            description,
          },
        },
      }
    `,
  });
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/wyszukiwarka',
  });
}