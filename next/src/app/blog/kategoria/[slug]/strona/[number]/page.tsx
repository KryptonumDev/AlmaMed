import Newsletter from '@/components/_global/newsletter';
import { sanityFetch } from '../../../../../../utils/sanity-client';
import Blog from '@/components/_global/blog';
import { notFound } from 'next/navigation';

export default async function Index({ params: { slug, number } }: { params: { slug: string; number: string } }) {
  const { posts, categories, global, total } = await sanityFetch<any>({
    query: `{
      "total": count(*[_type == 'blogEntry' && count((categories[]->slug.current)[@ in [$slug]]) > 0]),
      "posts": *[_type == 'blogEntry' && count((categories[]->slug.current)[@ in [$slug]]) > 0][$before...$after]{
        _updatedAt,
        brief,
        name,
        slug{
          current
        },
        categories[]->{
          name,
          slug{
            current,
          }
        },
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
      "categories": *[_type == 'blogCategory']{
        name,
        slug
      },
      "global": *[_id == 'global'][0]{
        // Newsletter
        newsletter_left_icon{
          asset->{
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
        },
        newsletter_left_content,
        newsletter_left_cta{
          href,
          text,
          theme, 
        },
        newsletter_right_heading,
        newsletter_right_paragraph,
        newsletter_mailerlite_id,
      }
    }`,
    params: { slug: slug, before: (Number(number) - 1) * 6, after: Number(number) * 6 },
  });

  if (!posts.length) return notFound();

  return (
    <>
      <Blog
        posts={posts}
        categories={categories}
        urlBasis={`/blog/kategoria/${slug}`}
        total={total}
        page={Number(number)}
      />
      <Newsletter
        icon={global.newsletter_left_icon}
        content={global.newsletter_left_content}
        link={global.newsletter_left_cta}
        title={global.newsletter_right_heading}
        text={global.newsletter_right_paragraph}
        id={global.newsletter_mailerlite_id}
      />
    </>
  );
}
