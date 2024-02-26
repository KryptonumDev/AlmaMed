export default {
  name: 'Contact',
  title: 'Kontakt',
  type: 'document',
  icon: () => `📞`,
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
      name: 'contact_subjects',
      type: 'array',
      title: 'Tematy wiadomości w formualrzu kontaktowym',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'string',
          title: 'Temat',
        },
      ],
    },
    // localizations
    {
      name: 'localizations_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'localizations',
      group: 'localizations',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'localizations',
      type: 'array',
      title: 'Placówki',
      fieldset: 'localizations',
      group: 'localizations',
      of: [
        {
          type: 'reference',
          title: 'Placówka',
          to: [{type: 'localizations'}],
        },
      ],
    },
    // blocks
    {
      name: 'blocks_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'blocks',
      group: 'blocks',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blocks_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'blocks',
      group: 'blocks',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blocks_list',
      type: 'array',
      title: 'Godziny otwarcia',
      fieldset: 'blocks',
      group: 'blocks',
      of: [
        {
          type: 'blocks',
          title: 'Element listy',
        },
      ],
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
      of: [
        {
          type: 'faq_list_element',
          title: 'FAQ',
          validation: (Rule) => Rule.required(),
        },
      ],
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
      name: 'localizations',
      title: 'Placówki',
      options: {collapsible: true},
    },
    {
      title: 'Godziny otwarcia',
      name: 'blocks',
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
      title: 'Placówki',
      name: 'localizations',
    },
    {
      title: 'Godziny otwarcia',
      name: 'blocks',
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
