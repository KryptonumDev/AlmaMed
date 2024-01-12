import PageMap from '@/components/_global/page-map';
import { sanityFetch } from '../../utils/sanity-client';

export default async function Index() {
  const { categories, services, posts, specialists } = await sanityFetch<any>({
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
  }`,
  });

  return <PageMap categories={categories} services={services} posts={posts} specialists={specialists}/>;
}
