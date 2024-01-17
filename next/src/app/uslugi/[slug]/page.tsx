import Treatments from '@/components/_services/treatments';
import { sanityFetch } from '../../../utils/sanity-client';
import { notFound } from 'next/navigation';
import Flex from '@/components/_services/flex';
import Video from '@/components/_global/video';
import BlogSlider from '@/components/_global/blog-slider';
import Hero from '@/components/_global/hero';
import Freebie from '@/components/_services/freebie';
import Mentoring from '@/components/_services/mentoring';
import Advantages from '@/components/_global/advantages';
import Tests from '@/components/_services/tests';

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
      // Advantages
      advantages_heading,
      advantages_paragraph,
      advantages_list[]{
        title,
        text,
      },
      // freebie
      freebie_heading,
      freebie_paragraph,
      freebie_mailerlite_id,
      freebie_image{
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
      treatments_list[],
      treatment_annotation,
      // mentoring
      mentoring_heading,
      mentoring_paragraph,
      mentoring_oversized,
      mentoring_list[]{
        text,
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
        }
      },
      mentoring_Cta{
        href,
        text,
        theme,  
      },
      //tests
      tests[]{
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
      // specialists
      specialists_heading,
      specialists_list[]{
        paragraph,
        link_to_specialist,
        title -> {
          name,
          slug,
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
      registration_video{
        asset->{
          url
        }
      }
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
      <Hero
        title={page.hero_Heading}
        text={page.hero_Paragraph}
        list={page.hero_icons_list}
        cta={page.hero_Cta}
        image={page.hero_background}
      />
      <Treatments
        title={page.treatments_heading}
        text={page.treatments_paragraph}
        list={page.treatments_list}
        annotation={page.treatment_annotation}
      />
      {page.mentoring_heading && page.mentoring_list && (
        <Mentoring
          title={page.mentoring_heading}
          text={page.mentoring_paragraph}
          list={page.mentoring_list}
          oversized={page.mentoring_oversized}
          cta={page.mentoring_Cta}
        />
      )}
      {page?.tests?.map((test: any) => (
        <Tests
          key={test.title}
          title={test.title}
          text={test.paragraph}
          image={test.image}
          benefits={test.benefits}
          subTitle={test.sub_title}
          price={test.price}
          list={test.list}
        />
      ))}
      {page.advantages_heading && page.advantages_list && (
        <Advantages
          title={page.advantages_heading}
          text={page.advantages_paragraph}
          advantages={page.advantages_list}
          small={true}
        />
      )}
      <Flex
        title={page.specialists_heading}
        list={page.specialists_list}
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
      {page.freebie_heading && page.freebie_image && (
        <Freebie
          title={page.freebie_heading}
          text={page.freebie_paragraph}
          image={page.freebie_image}
          id={page.freebie_mailerlite_id}
        />
      )}
    </>
  );
}
