// import Hero from '../../../components/hero';
import Treatments from '@/components/components/_services/treatments';
import { sanityFetch } from '../../../utils/sanity-client';
import { notFound } from 'next/navigation';
import Flex from '@/components/components/_services/flex';
import Video from '@/components/components/_global/video';
import BlogSlider from '@/components/components/_global/blog-slider';

export default async function Index({ params: { slug } }: { params: { slug: string } }) {
  const { page, global, posts } = await sanityFetch<any>({
    query: `{
    "page": *[_type == "services" && slug.current == $slug][0]{
      // Hero
      hero_Heading,
      hero_Paragraph,
      hero_icons_list[]{
        text,
        icon{
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
      hero_Cta[]{
        href,
        text,
        theme,  
      },
      hero_background {
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
      // treatments
      treatments_heading,
      treatments_paragraph,
      treatments_list[]{
        title,
        paragraph,
        image{
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
        sub_title,
        price[],
        benefits[],
        list[],
      },
      // flex
      flex_heading,
      flex_list[]{
        text,
        icon{
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
      flex_Cta[]{
        href,
        text,
        theme,  
      },
      flex_image{
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
      }
    },
    "global": *[_id == 'global'][0]{
      blog_heading,
      blog_paragraph,
      registration_heading,
      registration_steps[],
      registration_paragraph,
      registration_video
    },
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
  }
    `,
    params: { slug: slug },
  });

  if (!page) return notFound();

  return (
    <>
      {/* <Hero
        title={page.hero_Heading}
        text={page.hero_Paragraph}
        list={page.hero_icons_list}
        cta={page.hero_Cta}
        image={page.hero_background}
      /> */}
      <Treatments
        title={page.treatments_heading}
        text={page.treatments_paragraph}
        list={page.treatments_list}
      />
      <Flex
        title={page.flex_heading}
        list={page.flex_list}
        image={page.flex_image}
        links={page.flex_Cta}
      />
      <Video
        title={global.registration_heading}
        text={global.registration_paragraph}
        video={global.registration_video}
        steps={global.registration_steps}
      />
      <BlogSlider
        title={global.blog_heading}
        text={global.blog_paragraph}
        posts={posts}
      />
    </>
  );
}
