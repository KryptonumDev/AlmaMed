import Advantages from '../components/advantages';
// import BlogSlider from '../components/blog-slider';
import Cta from '../components/cta';
// import Hero from '../components/hero';
import Tiles from '../components/tiles';
import Localization from '../components/localization';
import Newsletter from '../components/newsletter';
import Scoring from '../components/scoring';
import { sanityFetch } from '../utils/sanity-client';
import Prevention from '../components/prevention';

export default async function Index() {
  const home = await sanityFetch<any>({
    query: `
    *[_id == "IndexPage"]{
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
      // Scoring
      patients,
      averageRating,
      percentTakenCalls,
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
      // Advantages
      advantages_heading,
      advantages_paragraph,
      advantages_list[]{
        title,
        text,
      },
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
      // Prevention
      prevention_heading,
      prevention_paragraph,
      prevention_cta{
        href,
        text,
        theme, 
      },
      prevention_metrics_title,
      prevention_metrics_number,
      // cta
      cta_heading,
      cta_paragraph,
      cta_bigCta{
        href,
        text,
      },
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
      <Scoring
        patients={Number(home.patients)}
        averageRating={home.averageRating}
        percentTakenCalls={Number(home.percentTakenCalls)}
      />
      <Localization
        title={home.localizations_heading}
        cards={home.localizations}
        ctaTitle={home.localizations_Cta_text}
        ctaLink={home.localizations_Cta_link}
      />
      <Advantages
        title={home.advantages_heading}
        text={home.advantages_paragraph}
        advantages={home.advantages_list}
      />
      <Newsletter 
        icon={home.newsletter_left_icon}
        content={home.newsletter_left_content}
        link={home.newsletter_left_cta}
        title={home.newsletter_right_heading}
        text={home.newsletter_right_paragraph}
      />
      <Prevention
        title={home.prevention_heading}
        text={home.prevention_paragraph}
        cta={home.prevention_cta}
        metricsTitle={home.prevention_metrics_title}
        metricsNumber={home.prevention_metrics_number}
      />
      <Cta
        title={home.cta_heading}
        text={home.cta_paragraph}
        link={home.cta_bigCta}
      />
      {/* <BlogSlider
        title={home.blog_heading}
        text={home.blog_paragraph}
        posts={[]}
      /> */}
    </>
  );
}
