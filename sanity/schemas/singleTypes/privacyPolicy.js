export default {
  name: 'PrivacyPolicy',
  title: 'Polityka prywatności',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Treść polityki prywatności',
      validation: Rule => Rule.required(),
    },
    // seo
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