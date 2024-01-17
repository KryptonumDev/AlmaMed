import Mentoring from '@/components/_services/mentoring';
import Cta from '@/components/_global/cta';
import Hero from '@/components/_global/hero';
import Tiles from '@/components/_services/tiles';
import { sanityFetch } from '../../utils/sanity-client';
import PaymentMethods from '@/components/_services/payment-methods';
import Video from '@/components/_global/video';
import Freebie from '@/components/_services/freebie';
import Faq from '@/components/_global/faq';

export default async function Index() {
  const { page, global } = await sanityFetch<any>({
    query: `{
      "page": *[_id == "servicesPage"]{
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
        // Tiles
        tiles_heading,
        tiles_paragraph,
        tiles_list[]->{
          name,
          slug,
          have_page,
          icon{
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
        // mentoring
        mentoring_heading,
        mentoring_paragraph,
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
        // types of services
        services_types[]{
          title,
          paragraph,
          list[]-> {
            name,
            slug,
            have_page,
            icon{
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
        },
        // payment methods
        payment_methods_heading,
        payment_methods_paragraph,
        payment_methods_image{
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
        // cta
        cta_heading,
        cta_paragraph,
        cta_bigCta{
          href,
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
        // faq
        faq_heading,
        faq_paragraph,
        faq_Cta{
          href,
          text,
        },
        faq_list[]{
          answer,
          question
        }
      }[0],
      "global": *[_id == 'global']{
        registration_heading,
        registration_steps[],
        registration_paragraph,
        registration_video{
          asset->{
            url
          }
        }
      }[0],
    }`,
  });

  return (
    <>
      <Hero
        title={page.hero_Heading}
        text={page.hero_Paragraph}
        list={page.hero_icons_list}
        cta={page.hero_Cta}
        image={page.hero_background}
      />
      <Tiles
        title={page.tiles_heading}
        text={page.tiles_paragraph}
        tiles={page.tiles_list}
      />
      <Mentoring
        title={page.mentoring_heading}
        text={page.mentoring_paragraph}
        list={page.mentoring_list}
        cta={page.mentoring_Cta}
      />
      {page.services_types.map((el: any, i: number) => (
        <Tiles
          key={el.title + i}
          title={el.title}
          text={el.paragraph}
          tiles={el.list}
          altColors={true}
        />
      ))}
      <Cta
        title={page.cta_heading}
        text={page.cta_paragraph}
        link={page.cta_bigCta}
      />
      <PaymentMethods
        title={page.payment_methods_heading}
        text={page.payment_methods_paragraph}
        image={page.payment_methods_image}
      />
      <Video
        title={global.registration_heading}
        text={global.registration_paragraph}
        video={global.registration_video}
        steps={global.registration_steps}
      />
      <Freebie
        title={page.freebie_heading}
        text={page.freebie_paragraph}
        image={page.freebie_image}
        id={page.freebie_mailerlite_id}
      />
      <Faq
        title={page.faq_heading}
        text={page.faq_paragraph}
        cta={page.faq_Cta}
        list={page.faq_list}
      />
    </>
  );
}
