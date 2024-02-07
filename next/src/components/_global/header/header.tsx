import { sanityFetch } from '../../../utils/sanity-client';
import HeaderContent from './header-content';

export default async function Header() {
  const { addresses } = await sanityFetch<any>({
    query: /* groq */ `{
      "addresses": *[_type == "localizations"]{
        book,
        phone,
        email,
        time,
        shortName
      }
    }`,
  });
  return (
    <HeaderContent addresses={addresses}/>
  );
}
