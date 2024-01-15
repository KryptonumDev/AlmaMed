export default {
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kategorii',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      title: 'Slug',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo'
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}