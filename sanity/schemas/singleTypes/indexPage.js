export default {
  name: 'IndexPage',
  title: 'Strona główna',
  type: 'document',
  icon: () => `🏠`,
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
      title: 'Obrazek w tle 1',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_background_alternative',
      type: 'image',
      title: 'Obrazek w tle 2',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    // tiles
    {
      name: 'tiles_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'tiles',
      group: 'tiles',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tiles_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'tiles',
      group: 'tiles',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tiles_list',
      type: 'array',
      title: 'Lista usług',
      fieldset: 'tiles',
      group: 'tiles',
      validation: (Rule) => Rule.required().max(8),
      of: [
        {
          type: 'reference',
          to: {
            type: 'services',
          },
          options: {
            disableNew: true,
          },
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
    {
      name: 'localizations_Cta_text',
      type: 'markdown',
      title: 'Tekst obok przycisku',
      fieldset: 'localizations',
      group: 'localizations',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'localizations_Cta_link',
      type: 'bigCta',
      title: 'CTA',
      fieldset: 'localizations',
      group: 'localizations',
      validation: (Rule) => Rule.required(),
    },
    // prevention
    {
      name: 'prevention_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'prevention',
      group: 'prevention',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prevention_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'prevention',
      group: 'prevention',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prevention_cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'prevention',
      group: 'prevention',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prevention_metrics_title',
      type: 'string',
      title: 'Tytuł wykresu',
      fieldset: 'prevention',
      group: 'prevention',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prevention_metrics_number',
      type: 'number',
      title: 'Wartość wykresu',
      fieldset: 'prevention',
      group: 'prevention',
      validation: (Rule) => Rule.required().min(0).max(100),
    },
    // cta
    {
      name: 'cta_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'cta',
      group: 'cta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'cta',
      group: 'cta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta_bigCta',
      type: 'bigCta',
      title: 'CTA',
      fieldset: 'cta',
      group: 'cta',
      validation: (Rule) => Rule.required(),
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
      name: 'tiles',
      title: 'Usługi',
      options: {collapsible: true},
    },
    {
      name: 'localizations',
      title: 'Placówki',
      options: {collapsible: true},
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
      options: {collapsible: true},
    },
    {
      title: 'Profilaktyka',
      name: 'prevention',
      options: {collapsible: true},
    },
    {
      name: 'cta',
      title: 'Wezwanie do działania',
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
      title: 'Usługi',
      name: 'tiles',
    },
    {
      title: 'Placówki',
      name: 'localizations',
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
    },
    {
      title: 'Profilaktyka',
      name: 'prevention',
    },
    {
      title: 'Wezwanie do działania',
      name: 'cta',
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
}
