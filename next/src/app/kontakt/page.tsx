import Newsletter from '@/components/_global/newsletter';
import { sanityFetch } from '../../utils/sanity-client';
import Faq from '@/components/_global/faq';
import Localization from '@/components/_global/localization';
import Blocks from '@/components/_contact/blocks';
import Hero from '@/components/_contact/hero';

export default async function Index() {
  const { page, global, posts, localizations } = await sanityFetch<any>({
    query: `{
    "page": *[_id == "Contact"][0]{
      // Hero
      hero_Heading,
      hero_Paragraph,
      contact_subjects[],
      // Localization
      localizations_heading,
      localizations[]->{
        name,
        map,
        address,
        phone,
        email
      },
      // faq
      faq_heading,
      faq_list[]{
        answer,
        question
      },
      // blocks
      blocks_heading,
      blocks_paragraph,
      blocks_list[]{
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
    },
    "global": *[_id == 'global'][0]{
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
      newsletter_right_heading,
      newsletter_right_paragraph,
      newsletter_mailerlite_id,
    },
    "posts": *[_type == 'blogEntry'][0]{
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
    "localizations": *[_type == "localizations"]{
      name
    }
  }`,
  });

  return (
    <>
      <Hero
        title={page.hero_Heading}
        text={page.hero_Paragraph}
        formSubjects={page.contact_subjects}
        localizations={localizations}
      />
      <Localization
        title={page.localizations_heading}
        cards={page.localizations}
      />
      <Blocks
        title={page.blocks_heading}
        text={page.blocks_paragraph}
        blocks={page.blocks_list}
      />
      <Faq
        title={page.faq_heading}
        list={page.faq_list}
      />
      <Newsletter
        title={global.newsletter_right_heading}
        text={global.newsletter_right_paragraph}
        post={posts}
        id={global.newsletter_mailerlite_id}
      />
    </>
  );
}
