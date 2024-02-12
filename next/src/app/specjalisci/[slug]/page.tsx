import Hero from '@/components/_specialist/hero';
import { sanityFetch } from '../../../utils/sanity-client';
import Flex from '@/components/_specialist/flex';
import Comments from '@/components/_global/comments';
import Slider from '@/components/_specialist/slider';
import Seo from '@/components/ui/seo';

export default async function Index({ params: { slug } }: { params: { slug: string } }) {
  const { specialists } = await sanityFetch<any>({
    query: `{
      "specialists": *[_type == 'doctors' && slug.current == $slug][0]{
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
        },
        education[]{
          text,
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
          },
        },
        flex[]{
          content,
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
        },
        comments[]->{
          rating,
          text,
          name
        },
        similar[]->{
          name,
          slug,
          profession,
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
        }
      }
    }`,
    params: {
      slug: slug,
    },
  });

  return (
    <>
      <Hero
        name={specialists.name}
        profession={specialists.profession}
        image={specialists.image}
        education={specialists.education}
      />
      {specialists?.flex?.map((item: any, index: number) => (
        <Flex
          key={index}
          content={item.content}
          image={item.image}
          reverse={index % 2 === 0}
        />
      ))}
      {specialists?.comments?.length > 0 && (
        <Comments
          title='## **Poznaj opinie** moich pacjentów'
          comments={specialists.comments}
        />
      )}
      {specialists?.similar?.length > 0 && (
        <Slider
          title='## Podobni **specjaliści**'
          specialists={specialists.similar}
        />
      )}
    </>
  );
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const {
    page: { seo },
  } = await sanityFetch<any>({
    query: `
    {
      "page": *[_type == "doctors" && slug.current == $slug][0]{
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
    path: '/',
  });
}