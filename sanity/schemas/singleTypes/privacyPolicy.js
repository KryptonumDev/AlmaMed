export default {
  name: 'PrivacyPolicy',
  title: 'Polityka prywatności',
  type: 'document',
  icon: () => '🔍',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraphs',
      title: 'Paragrafy',
      type: 'array',
      of: [{ type: 'markdown' }]
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