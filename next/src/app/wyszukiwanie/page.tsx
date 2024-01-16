import { sanityFetch } from '../../utils/sanity-client';
import Search from '@/components/_global/search';

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

  return <Search categories={categories} services={services} posts={posts} specialists={specialists} localizations={localizations}/>;
}
