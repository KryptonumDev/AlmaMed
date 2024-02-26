export default {
  name: 'blogEntry',
  title: 'Artykuł blogowy',
  type: 'document',
  icon: () => `📝`,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa artykułu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      title: 'Slug',
      validation: Rule => Rule.required(),
    },
    {
      name: 'brief',
      type: 'text',
      rows: 3,
      title: 'Krótki opis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Miniaturka',
      validation: Rule => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Kategorie',
      of: [{ type: 'reference', to: [{ type: 'blogCategory' }] }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      type: 'PortableText',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}