import { sanityFetch } from '../../utils/sanity-client';
import Seo from '@/components/ui/seo';
import Hero from '@/components/_global/hero';
import Intro from '@/components/_cooperation/intro';
import Groups from '@/components/_cooperation/groups';
import Network from '@/components/_cooperation/network';
import FormSection from '@/components/_cooperation/form';
import Faq from '@/components/_global/faq';

export default async function CooperationPage() {
  const { page, global } = await sanityFetch<any>({
    query: `{
      "page": *[_id == "Cooperation"][0]{
        hero_Heading,
        hero_Paragraph,
        hero_Cta[]{
          theme,
          text,
          href
        },
        hero_Img{
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
        intro_Heading,
        intro_Paragraph,
        groups[]{
          heading,
          content,
          img{
            asset->{
              url
            }
          }
        },
        network_Heading,
        network_Paragraph,
        form_Heading,
        form_Paragraph,
        form_Img{
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
        form_Subjects[],
        form_TargetEmail,
        faq_heading,
        faq_list[]{
          question,
          answer
        }
      },
      "global": *[_id == "global"][0]{
        networkClinics[]{
          name,
          shortName,
          locations[]{
            city,
            address,
            phone,
            email
          },
          url,
          isActive,
          logo{
            asset->{
              url
            }
          }
        }
      }
    }`,
  });

  return (
    <>
      <Hero
        title={page?.hero_Heading}
        text={page?.hero_Paragraph}
        list={[]}
        cta={page?.hero_Cta}
        image={page?.hero_Img}
        imageAlternative={page?.hero_Img}
      />
      <Intro
        title={page?.intro_Heading}
        text={page?.intro_Paragraph}
      />
      <Groups groups={page?.groups || []} />
      <Network
        title={page?.network_Heading}
        text={page?.network_Paragraph}
        clinics={global?.networkClinics || []}
      />
      <FormSection
        title={page?.form_Heading}
        text={page?.form_Paragraph}
        image={page?.form_Img}
        subjects={page?.form_Subjects || []}
        targetEmail={page?.form_TargetEmail || ''}
      />
      <Faq
        title={page?.faq_heading}
        list={page?.faq_list || []}
      />
    </>
  );
}

export async function generateMetadata() {
  const { page } = await sanityFetch<any>({
    query: `{
      "page": *[_id == "Cooperation"][0]{
        seo {
          title,
          description
        }
      }
    }`,
  });
  const seo = page?.seo;

  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/wspolpraca',
  });
}
