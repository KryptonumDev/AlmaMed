export default {
  name: 'servicesPage',
  title: 'Usługi',
  type: 'document',
  icon: () => `🛠`,
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
    // mentoring
    {
      name: 'mentoring_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'mentoring',
      group: 'mentoring',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mentoring_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'mentoring',
      group: 'mentoring',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mentoring_list',
      type: 'array',
      title: 'Etapy opieky koordynowanej',
      fieldset: 'mentoring',
      group: 'mentoring',
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'mentoring_list_element',
          type: 'mentoring_list_element',
          title: 'Element listy',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'mentoring_Cta',
      type: 'cta',
      title: 'Przycisk pod listą',
      fieldset: 'mentoring',
      group: 'mentoring',
    },
    // types of services
    {
      name: 'services_types',
      type: 'array',
      title: 'Lista rodzajów usług',
      fieldset: 'services_types',
      group: 'services_types',
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'services_types',
          type: 'services_types',
          title: 'Typ usługi',
          validation: (Rule) => Rule.required(),
        },
      ],
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
    // payment methods
    {
      name: 'payment_methods_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'payment_methods',
      group: 'payment_methods',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'payment_methods_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'payment_methods',
      group: 'payment_methods',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'payment_methods_image',
      type: 'image',
      title: 'Obrazek metod płatności',
      fieldset: 'payment_methods',
      group: 'payment_methods',
      validation: (Rule) => Rule.required(),
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
      name: 'tiles',
      title: 'Usługi',
      options: {collapsible: true},
    },
    {
      name: 'mentoring',
      title: 'Opieka koordynowana',
      options: {collapsible: true},
    },
    {
      name: 'services_types',
      title: 'Lista rodzajów usług',
      options: {collapsible: true},
    },
    {
      name: 'cta',
      title: 'Wezwanie do działania',
      options: {collapsible: true},
    },
    {
      name: 'payment_methods',
      title: 'Metody płatności',
      options: {collapsible: true},
    },
    {
      name: 'freebie',
      title: 'Darmowy e-book',
      options: {collapsible: true},
    },
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true},
    },
    {
      name: 'faq',
      title: 'FAQ',
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
      title: 'Opieka koordynowana',
      name: 'mentoring',
    },
    {
      title: 'Lista rodzajów usług',
      name: 'services_types',
    },
    {
      title: 'Wezwanie do działania',
      name: 'cta',
    },
    {
      title: 'Metody płatności',
      name: 'payment_methods',
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
