import Advantages from '@/components/_global/advantages';
import BlogSlider from '@/components/_global/blog-slider';
import Hero from '@/components/_global/hero';
import Localization from '@/components/_global/localization';
import Newsletter from '@/components/_global/newsletter';
import Scoring from '@/components/_global/scoring';
import Prevention from '@/components/_homepage/prevention';
import { sanityFetch } from '../../utils/sanity-client';
import { notFound } from 'next/navigation';
import Mentoring from '@/components/_services/mentoring';
import OneImage from '@/components/_localization/one-image';
import TwoImage from '@/components/_localization/two-image';
import Seo from '@/components/ui/seo';

export default async function Index({ params: { slug } }: { params: { slug: string } }) {
  const { page, global, posts } = await sanityFetch<any>({
    query: `{
    "page": *[_type == "localizations" && slug.current == $slug][0]{
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
      // one image section
      one_image_heading,
      one_image_paragraph,
      one_image_image{
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

      // two image section
      two_image_heading,
      two_image_paragraph,
      two_image_first_image{
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
      two_image_second_image{
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
    },
    "global": *[_id == 'global'][0]{
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
      newsletter_mailerlite_id,
    },
    "posts": *[_type == 'blogEntry'][0...2]{
      _updatedAt,
      name,
      slug{
        current
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
  }`,
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
      <OneImage
        title={page.one_image_heading}
        text={page.one_image_paragraph}
        image={page.one_image_image}
      />
      <Advantages
        title={global.advantages_heading}
        text={global.advantages_paragraph}
        advantages={global.advantages_list}
      />
      <TwoImage
        title={page.two_image_heading}
        text={page.two_image_paragraph}
        firstImage={page.two_image_first_image}
        secondImage={page.two_image_second_image}
      />
      <Scoring
        patients={Number(global.patients)}
        averageRating={global.averageRating}
        percentTakenCalls={Number(global.percentTakenCalls)}
      />
      <Localization
        title={page.localizations_heading}
        cards={page.localizations}
        ctaTitle={page.localizations_Cta_text}
        ctaLink={page.localizations_Cta_link}
      />
      <Mentoring
        title={page.mentoring_heading}
        text={page.mentoring_paragraph}
        list={page.mentoring_list}
        cta={page.mentoring_Cta}
      />
      <Newsletter
        icon={global.newsletter_left_icon}
        content={global.newsletter_left_content}
        link={global.newsletter_left_cta}
        title={global.newsletter_right_heading}
        text={global.newsletter_right_paragraph}
        id={global.newsletter_mailerlite_id}
      />
      <Prevention
        title={page.prevention_heading}
        text={page.prevention_paragraph}
        cta={page.prevention_cta}
        metricsTitle={page.prevention_metrics_title}
        metricsNumber={page.prevention_metrics_number}
      />
      <BlogSlider
        title={global.blog_heading}
        text={global.blog_paragraph}
        posts={posts}
      />
    </>
  );
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const {
    page: { seo },
  } = await sanityFetch<any>({
    query: `
    {
      "page": *[_type == "localizations" && slug.current == $slug][0]{
        seo {
          title,
          description,
        },
      },
    }
    `,
    params: { slug: slug },
  });
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/' + slug,
  });
}