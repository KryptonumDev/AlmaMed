import { sanityFetch } from '../../../utils/sanity-client';
import HeaderContent from './header-content';

export default async function Header() {
  const { global } = await sanityFetch<any>({
    query: `{

    "global": *[_id == 'global'][0]{
      // Advantages
      book,
      phone,
      email,
      adress,
      time
    },
  }`,
  });

  return <HeaderContent 
    book={global.book}
    phone={global.phone}
    email={global.email}
    adress={global.adress}
    time={global.time}
  />;
}
