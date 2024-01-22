import { sanityFetch } from '../../utils/sanity-client';

export const domain = 'https://centrum-almamed.pl';
export const locale = 'pl';

const Seo = async ({ title, description, path, ...props }: { title: string; description: string; path: string }) => {
  const { seo: fetchedSeo, robotsIndex } = await query();

  const seo = {
    title: title || 'Centrum Medyczne Alma Med',
    description: description || '',
    url: `${domain}${path}` || '',
    ogImage: fetchedSeo?.og_Img.asset.url || '',
  };

  const metadata = {
    robots: {
      index: robotsIndex,
    },
    metadataBase: new URL(domain),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    ...props,
  };

  return metadata;
};

export default Seo;

const query = async () => {
  const {
    page,
  } = await sanityFetch<any>({
    query: `
    {
      "page": *[_id == "global"][0]{
        robotsIndex,
        seo {
          og_Img {
            asset->{
              url
            }
          }
        }
      },
    }
    `,
  });
  return page;
};
