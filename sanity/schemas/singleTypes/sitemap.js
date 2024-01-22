export default {
  name: 'Sitemap',
  title: 'Mapa strony',
  type: 'document',
  fields: [
    // seo
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true},
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
}
