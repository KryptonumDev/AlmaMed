import { sanityFetch } from "../utils/sanity-client";

const domain = "https://centrum-almamed.pl"

export default async function sitemap() {

  const { categories, services, posts, specialists, localizations } = await sanityFetch<any>({
    query: `{
    "categories": *[_type == 'blogCategory']{
      name,
      slug
    },
    "services": *[_type == 'services' && have_page == true]{
      name,
      slug
    },
    "posts": *[_type == 'blogEntry']{
      name,
      slug
    },
    "specialists": *[_type == 'doctors'] | order(order asc){
      name,
      slug
    },
    "localizations": *[_type == "localizations" && have_page == true]{
      name,
      slug
    }
  }`,
  });

  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/dla-pacjenta`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/kontakt`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/uslugi`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/specjalisci`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/polityka-prywatnosci`,
      lastModified: new Date(),
    },
    ...categories.map((category: any) => ({
      url: `${domain}/blog/kategoria/${category.slug.current}`,
      lastModified: new Date(),
    })),
    ...services.map((service: any) => ({
      url: `${domain}/uslugi/${service.slug.current}`,
      lastModified: new Date(),
    })),
    ...posts.map((post: any) => ({
      url: `${domain}/blog/${post.slug.current}`,
      lastModified: new Date(),
    })),
    ...specialists.map((specialist: any) => ({
      url: `${domain}/specjalisci/${specialist.slug.current}`,
      lastModified: new Date(),
    })),
    ...localizations.map((localization: any) => ({
      url: `${domain}/${localization.slug.current}`,
      lastModified: new Date(),
    })),
  ]
}