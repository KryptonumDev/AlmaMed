import Hero from '@/components/_specialist/hero';
import { sanityFetch } from '../../../utils/sanity-client';
import Flex from '@/components/_specialist/flex';
import Comments from '@/components/_global/comments';
import Slider from '@/components/_specialist/slider';

export default async function Index() {
  const { page, global, specialists } = await sanityFetch<any>({
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
      slug: 'adam-boruch',
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
      {specialists.flex?.map((item: any, index: number) => (
        <Flex
          key={index}
          content={item.content}
          image={item.image}
          reverse={index % 2 === 0}
        />
      ))}
      <Comments
        title='## **Poznaj opinie** moich pacjentów'
        comments={specialists.comments}
      />
      <Slider
        title='## Podobni **specjaliści**'
        specialists={specialists.similar}
      />
    </>
  );
}
