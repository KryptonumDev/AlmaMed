import PrivacyPolicy from '@/components/_global/privacy-policy';
import { sanityFetch } from '../../utils/sanity-client';
import Seo from '@/components/ui/seo';

export default async function Index() {
  const { page } = await sanityFetch<any>({
    query: `{
      "page": *[_id == "PrivacyPolicy"][0]{
        heading,
        content,
      },
    }`,
  });
  
  return <PrivacyPolicy title={page.heading} text={page.content}/>;
}

export async function generateMetadata() {
  const {
    page: { seo },
  } = await sanityFetch<any>({
    query: `
    {
      "page": *[_id == "PrivacyPolicy"][0]{
        seo {
          title,
          description,
        },
      },
    }
    `,
  });
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/polityka-prywatnosci',
  });
}