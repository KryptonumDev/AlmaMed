import Mentoring from '@/components/components/_services/mentoring';
import Cta from '../../components/_global/cta';
// import Hero from '../components/hero';
import Tiles from '../../components/_services/tiles';
import { sanityFetch } from '../../utils/sanity-client';
import PaymentMethods from '@/components/components/_services/payment-methods';
import Video from '@/components/components/_global/video';
import Freebie from '@/components/components/_services/freebie';
import Faq from '@/components/components/_global/faq';

export default async function Index() {
  const home = await sanityFetch<any>({
    query: `
    *[_id == "servicesPage"]{
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
        color,
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
      // types of services
      services_types[]{
        title,
        paragraph,
        list[]-> {
          color, 
          name,
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
      //video
      registration_heading,
      registration_paragraph,
      registration_video,
      registration_steps[],
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
    }[0]
    `,
  });

  return (
    <>
      {/* <Hero
        title={home.hero_Heading}
        text={home.hero_Paragraph}
        list={home.hero_icons_list}
        cta={home.hero_Cta}
        image={home.hero_background}
      /> */}
      <Tiles
        title={home.tiles_heading}
        text={home.tiles_paragraph}
        tiles={home.tiles_list}
      />
      <Mentoring
        title={home.mentoring_heading}
        text={home.mentoring_paragraph}
        list={home.mentoring_list}
      />
      {home.services_types.map((el: any, i: number) => (
        <Tiles
          key={el.title + i}
          title={el.title}
          text={el.paragraph}
          tiles={el.list}
        />
      ))}
      <Cta
        title={home.cta_heading}
        text={home.cta_paragraph}
        link={home.cta_bigCta}
      />
      <PaymentMethods
        title={home.payment_methods_heading}
        text={home.payment_methods_paragraph}
        image={home.payment_methods_image}
      />
      <Video
        title={home.registration_heading}
        text={home.registration_paragraph}
        video={home.registration_video}
        steps={home.registration_steps}
      />
      <Freebie
        title={home.freebie_heading}
        text={home.freebie_paragraph}
        image={home.freebie_image}
      />
      <Faq
        title={home.faq_heading}
        text={home.faq_paragraph}
        cta={home.faq_Cta}
        list={home.faq_list}
      />
    </>
  );
}
