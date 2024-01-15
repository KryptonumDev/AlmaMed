import Article from '@/components/_global/article';
import { sanityFetch } from '../../../utils/sanity-client';
import { notFound } from 'next/navigation';

export default async function Index({ params: { slug } }: { params: { slug: string } }) {
  const { page } = await sanityFetch<any>({
    query: `{
    "page": *[_type == "blogEntry" && slug.current == $slug][0]{
      brief,
      name,
      content,
      thumbnail{
        asset ->{
          url,
          altText,
          metadata{
            lqip,
            dimensions{
              aspectRatio,
              width,
              height
            }
          }
        }
      }
    },
  }
    `,
    params: { slug: slug },
  });

  if (!page) return notFound();

  return (
    <Article
      brief={page.brief}
      name={page.name}
      content={page.content}
      thumbnail={page.thumbnail}
    />
  );
}