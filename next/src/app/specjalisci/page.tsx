import Scoring from '@/components/components/_global/scoring';
import { sanityFetch } from '../../utils/sanity-client';
import Faq from '@/components/components/_global/faq';
import Advantages from '@/components/components/_global/advantages';
import Comments from '@/components/components/_global/comments';
import Specialists from '@/components/components/_global/specialists';

export default async function Index() {
  const { page, global, specialists } = await sanityFetch<any>({
    query: `{
      "page": *[_id == "Personal"]{
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
        // comments
        comments_heading,
        comments_paragraph,
        comments[]->{
          text,
          name,
          rating
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
        // Advantages
        advantages_heading,
        advantages_paragraph,
        advantages_list[]{
          title,
          text,
        },
        // Scoring
        patients,
        averageRating,
        percentTakenCalls,
      }[0],
      "specialists": *[_type == 'doctors']{
        name,
        profession,
        slug,
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
    }`,
  });

  return (
    <>
      {/* <Hero
        title={page.hero_Heading}
        text={page.hero_Paragraph}
        list={page.hero_icons_list}
        cta={page.hero_Cta}
        image={page.hero_background}
      /> */}
      <Specialists
        specialists={specialists}
      />
      <Advantages
        title={global.advantages_heading}
        text={global.advantages_paragraph}
        advantages={global.advantages_list}
      />
      <Scoring
        patients={Number(global.patients)}
        averageRating={global.averageRating}
        percentTakenCalls={Number(global.percentTakenCalls)}
      />
      <Comments
        title={page.comments_heading}
        text={page.comments_paragraph}
        comments={page.comments}
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
