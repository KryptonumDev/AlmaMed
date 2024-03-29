import Newsletter from '@/components/_global/newsletter';
import { sanityFetch } from '../../utils/sanity-client';
import Blog from '@/components/_global/blog';
import Seo from '@/components/ui/seo';

export default async function Index() {
  const { posts, categories, global, total } = await sanityFetch<any>({
    query: `{
      "total": count(*[_type == 'blogEntry']),
      "posts": *[_type == 'blogEntry'][0...5]{
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
      }
    }`,
  });
  return (
    <>
      <Blog 
        posts={posts}
        categories={categories}
        urlBasis='/blog'
        total={total}
        page={1}
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

export async function generateMetadata() {
  const {
    page: { seo },
  } = await sanityFetch<any>({
    query: `
    {
      "page": *[_id == "Blog"][0]{
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
    path: '/blog',
  });
}