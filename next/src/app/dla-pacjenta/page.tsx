import Hero from '@/components/_global/hero';
import { sanityFetch } from '../../utils/sanity-client';
import Localization from '@/components/_global/localization';
import Instructions from '@/components/_for-patient/instructions';
import Video from '@/components/_global/video';
import Freebie from '@/components/_services/freebie';
import Faq from '@/components/_global/faq';
import TestLocalizations from '@/components/_for-patient/test-localizations';

export default async function Index() {
  const { page, global } = await sanityFetch<any>({
    query: `{
    "page": *[_id == "ForPatient"][0]{
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
      // Localization
      localizations_heading,
      localizations[]->{
        name,
        map,
        address,
        phone,
        email
      },
      localizations_Cta_text,
      localizations_Cta_link{
        href,
        text
      },
      // testLocalizations,
      testsLocalizations_heading,
      testsLocalizations_paragraph,
      testsLocalizations_card_with_list[]{
        title,
        isClosed,
        content[]{
          _type,
          content,
          href,
          list[],
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
      },
      // Instructions
      instructions_heading,
      instructions_paragraph,
      instructions_list[]{
        title,
        steps[]{
          text,
          image {
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
    },
    "global": *[_id == "global"][0]{
      registration_heading,
      registration_steps[],
      registration_paragraph,
      registration_video
    }
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
      <Localization
        title={page.localizations_heading}
        cards={page.localizations}
        ctaTitle={page.localizations_Cta_text}
        ctaLink={page.localizations_Cta_link}
      />
      <Instructions
        title={page.instructions_heading}
        text={page.instructions_paragraph}
        list={page.instructions_list}
      />
      <Video
        title={global.registration_heading}
        text={global.registration_paragraph}
        video={global.registration_video}
        steps={global.registration_steps}
      />
      <TestLocalizations
        title={page.testsLocalizations_heading}
        text={page.testsLocalizations_paragraph}
        cards={page.testsLocalizations_card_with_list}
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