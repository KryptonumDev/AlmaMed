import { sanityFetch } from '../../../utils/sanity-client';
import HeaderContent from './header-content';

export default async function Header() {
  const { addresses, global } = await sanityFetch<any>({
    query: /* groq */ `{
      "addresses": *[_type == "localizations"]{
        book,
        phone,
        email,
        time,
        shortName
      },
      "global": *[_id == "global"][0]{
        networkClinics[]{
          name,
          shortName,
          city,
          address,
          phone,
          email,
          url,
          isActive
        }
      }
    }`,
  });
  return (
    <HeaderContent addresses={addresses} networkClinics={global?.networkClinics || []}/>
  );
}
