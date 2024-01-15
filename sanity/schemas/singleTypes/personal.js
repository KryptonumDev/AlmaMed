export default {
  name: 'Personal',
  title: 'Specjaliści',
  type: 'document',
  fields: [
    // hero
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_icons_list',
      type: 'array',
      title: 'Lista ikon',
      fieldset: 'hero',
      group: 'hero',
      of: [
        {
          type: 'icon_list_element',
          title: 'Element listy',
        },
      ],
    },
    {
      name: 'hero_Cta',
      type: 'array',
      title: 'Przyciski pod listą',
      fieldset: 'hero',
      group: 'hero',
      of: [
        {
          name: 'cta',
          type: 'cta',
          title: 'CTA',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'hero_background',
      type: 'image',
      title: 'Obrazek w tle',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    // comments
    {
      name: 'comments_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'comments',
      group: 'comments',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'comments_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'comments',
      group: 'comments',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'comments',
      title: 'Opinie pacjentów',
      of: [{ type: 'reference', to: [{ type: 'comments' }] }],
      fieldset: 'comments',
      group: 'comments',
    },
    // faq
    {
      name: 'faq_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'faq',
      group: 'faq',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'faq_list',
      type: 'array',
      title: 'Lista pytań',
      fieldset: 'faq',
      group: 'faq',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'faq_list_element',
          title: 'FAQ',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'faq_paragraph',
      type: 'markdown',
      title: 'Paragraf po prewej od FAQ',
      fieldset: 'faq',
      group: 'faq',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'faq_Cta',
      type: 'bigCta',
      title: 'Przycisk pod paragrafem',
      fieldset: 'faq',
      group: 'faq',
    },
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
      name: 'hero',
      title: 'Sekcja powitalna',
      options: {collapsible: true},
    },
    {
      name: 'comments',
      title: 'Komentarze',
      options: {collapsible: true},
    },
    {
      name: 'faq',
      title: 'FAQ',
      options: {collapsible: true},
    },
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true},
    },
  ],
  groups: [
    {
      title: 'Sekcja powitalna',
      name: 'hero',
    },
    {
      title: 'Komentarze',
      name: 'comments',
    },
    {
      title: 'FAQ',
      name: 'faq',
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
}