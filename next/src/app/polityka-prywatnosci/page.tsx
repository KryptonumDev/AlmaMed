import PrivacyPolicy from '@/components/components/_global/privacy-policy';
import { sanityFetch } from '@/components/utils/sanity-client';

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
