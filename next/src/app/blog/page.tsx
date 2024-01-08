import Newsletter from '@/components/components/_global/newsletter';
import { sanityFetch } from '../../utils/sanity-client';
import Blog from '@/components/components/_blog/blog';

export default async function Index() {
  const { posts, categories, global } = await sanityFetch<any>({
    query: `{
      "posts": *[_type == 'blogEntry'][0...1]{
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
      />
      <Newsletter
        icon={global.newsletter_left_icon}
        content={global.newsletter_left_content}
        link={global.newsletter_left_cta}
        title={global.newsletter_right_heading}
        text={global.newsletter_right_paragraph}
      />
    </>
  );
}
