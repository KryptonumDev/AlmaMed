// import Hero from '../../../components/hero';
import Treatments from '@/components/components/_services/treatments';
import { sanityFetch } from '../../../utils/sanity-client';
import { notFound } from 'next/navigation';
import Flex from '@/components/components/_services/flex';

export default async function Index({ params: { slug } }: { params: { slug: string } }) {
  const page = await sanityFetch<any>({
    query: `
    *[_type == "services" && slug.current == $slug]{
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
    }[0]
    `,
    params: { slug: slug },
  });

  console.log(page);

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
      {/* <Video
        title={page.registration_heading}
        text={page.registration_paragraph}
        video={page.registration_video}
        steps={page.registration_steps}
      /> */}
      {/* <BlogSlider
        title={page.blog_heading}
        text={page.blog_paragraph}
        posts={[]}
      /> */}
    </>
  );
}
