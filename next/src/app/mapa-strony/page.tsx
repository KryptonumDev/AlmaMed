import PageMap from '@/components/_global/page-map';
import { sanityFetch } from '../../utils/sanity-client';
import Seo from '@/components/ui/seo';

export default async function Index() {
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

  return <PageMap categories={categories} services={services} posts={posts} specialists={specialists} localizations={localizations}/>;
}

export async function generateMetadata() {
  const {
    page: { seo },
  } = await sanityFetch<any>({
    query: `
    {
      "page": *[_id == "Sitemap"][0]{
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
    path: '/',
  });
}