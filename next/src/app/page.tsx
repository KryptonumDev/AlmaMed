import Advantages from '../components/_global/advantages';
import BlogSlider from '../components/_global/blog-slider';
import Cta from '../components/_global/cta';
// import Hero from '../components/hero';
import Tiles from '../components/_homepage/tiles';
import Localization from '../components/_global/localization';
import Newsletter from '../components/_global/newsletter';
import Scoring from '../components/_global/scoring';
import { sanityFetch } from '../utils/sanity-client';
import Prevention from '../components/_homepage/prevention';

export default async function Index() {
  const { page, global } = await sanityFetch<any>({
    query: `{
    "page": *[_id == "IndexPage"][0]{
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
    },
    "global": *[_id == 'global'][0]{
      // Blog
      blog_heading,
      blog_paragraph,
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
    },
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
      <Tiles
        title={page.tiles_heading}
        text={page.tiles_paragraph}
        tiles={page.tiles_list}
      />
      <Scoring
        patients={Number(page.patients)}
        averageRating={page.averageRating}
        percentTakenCalls={Number(page.percentTakenCalls)}
      />
      <Localization
        title={page.localizations_heading}
        cards={page.localizations}
        ctaTitle={page.localizations_Cta_text}
        ctaLink={page.localizations_Cta_link}
      />
      <Advantages
        title={page.advantages_heading}
        text={page.advantages_paragraph}
        advantages={page.advantages_list}
      />
      <Newsletter
        icon={global.newsletter_left_icon}
        content={global.newsletter_left_content}
        link={global.newsletter_left_cta}
        title={global.newsletter_right_heading}
        text={global.newsletter_right_paragraph}
      />
      <Prevention
        title={page.prevention_heading}
        text={page.prevention_paragraph}
        cta={page.prevention_cta}
        metricsTitle={page.prevention_metrics_title}
        metricsNumber={page.prevention_metrics_number}
      />
      <Cta
        title={page.cta_heading}
        text={page.cta_paragraph}
        link={page.cta_bigCta}
      />
      <BlogSlider
        title={global.blog_heading}
        text={global.blog_paragraph}
        posts={[]}
      />
    </>
  );
}
