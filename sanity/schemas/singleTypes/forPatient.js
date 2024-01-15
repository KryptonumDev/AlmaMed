export default {
  name: 'ForPatient',
  title: 'Dla pacjenta',
  type: 'document',
  icon: () => '🔍',
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
    // instructions
    {
      name: 'instructions_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'instructions',
      group: 'instructions',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instructions_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'instructions',
      group: 'instructions',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instructions_list',
      type: 'array',
      title: 'Lista instrukcji',
      fieldset: 'instructions',
      group: 'instructions',
      of: [
        {
          type: 'instruction_list_element',
          title: 'Element listy',
        },
      ],
    },
    // testsLocalizations
    {
      name: 'testsLocalizations_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'testsLocalizations',
      group: 'testsLocalizations',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testsLocalizations_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'testsLocalizations',
      group: 'testsLocalizations',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testsLocalizations_card_with_list',
      type: 'array',
      title: 'Karta z listą',
      fieldset: 'testsLocalizations',
      group: 'testsLocalizations',
      of: [
        {
          type: 'test_localization',
          title: 'Element listy',
        },
      ],
    },
    // freebie
    {
      name: 'freebie_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'freebie',
      group: 'freebie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'freebie_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'freebie',
      group: 'freebie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'freebie_image',
      type: 'image',
      title: 'Obrazek',
      fieldset: 'freebie',
      group: 'freebie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'freebie_mailerlite_id',
      type: 'string',
      title: 'Mailerlite ID grupy',
      fieldset: 'freebie',
      group: 'freebie',
      validation: (Rule) => Rule.required(),
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
      name: 'localizations',
      title: 'Placówki',
      options: {collapsible: true},
    },
    {
      name: 'instructions',
      title: 'Instrukcje',
      options: {collapsible: true},
    },
    {
      name: 'testsLocalizations',
      title: 'Gdzie wykonać badania',
      options: {collapsible: true},
    },
    {
      name: 'freebie',
      title: 'Darmowy e-book',
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
      title: 'Placówki',
      name: 'localizations',
    },
    {
      title: 'Instrukcje',
      name: 'instructions',
    },
    {
      title: 'Gdzie wykonać badania',
      name: 'testsLocalizations',
    },
    {
      title: 'Darmowy e-book',
      name: 'freebie',
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
