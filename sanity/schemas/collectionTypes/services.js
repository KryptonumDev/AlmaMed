const shouldShow = (document) => {
  return document.have_page === true
}

export default {
  name: 'services',
  title: 'Usługi',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Nazwa usługi',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona usłgugi',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'have_page',
      type: 'boolean',
      title: 'Czy ma podstronę?',
      initialValue: false,
    },
    {
      name: 'link_to_description',
      type: 'string',
      title: 'Link do opisu',
      description: 'Tylko jeśli usługa nie ma podstrony',
      validation: (rule) =>
        rule.custom((value, {document}) => {
          if (
            !shouldShow(document) &&
            value &&
            !value.startsWith('/') &&
            !value.startsWith('https://') &&
            !value.startsWith('#')
          )
            return 'Niepoprawny URL'
          return true
        }),
      hidden: ({document}) => document.have_page,
    },

    //  Dane podstrony

    // hero
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'hero',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'hero_icons_list',
      type: 'array',
      title: 'Lista ikon',
      fieldset: 'hero',
      of: [
        {
          type: 'icon_list_element',
          title: 'Element listy',
        },
      ],
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'hero_Cta',
      type: 'array',
      title: 'Przyciski pod listą',
      fieldset: 'hero',
      of: [
        {
          name: 'cta',
          type: 'cta',
          title: 'CTA',
          validation: (rule) =>
            rule.custom((currentValue, {document}) => {
              if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
              return true
            }),
        },
      ],
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'hero_background',
      type: 'image',
      title: 'Obrazek w tle',
      fieldset: 'hero',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    // treatments
    {
      name: 'treatments_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'treatments',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'treatments_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'treatments',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'treatments_list',
      type: 'array',
      title: 'Lista zabiegów',
      fieldset: 'treatments',
      hidden: ({document}) => !document.have_page,
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'treatment_annotation',
      type: 'markdown',
      title: 'Adnotacja pod listą',
      fieldset: 'treatments',
      hidden: ({document}) => !document.have_page,
    },
    // mentoring
    {
      name: 'mentoring_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'mentoring',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'mentoring_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'mentoring',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'mentoring_oversized',
      type: 'boolean',
      title: 'Czy elemnty mają być powiększone?',
      fieldset: 'mentoring',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'mentoring_list',
      type: 'array',
      title: 'Etapy opieky koordynowanej',
      fieldset: 'mentoring',
      hidden: ({document}) => !document.have_page,
      of: [
        {
          name: 'mentoring_list_element',
          type: 'mentoring_list_element',
          title: 'Element listy',
          validation: (rule) =>
            rule.custom((currentValue, {document}) => {
              if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
              return true
            }),
          hidden: ({document}) => !document.have_page,
        },
      ],
    },
    {
      name: 'mentoring_Cta',
      type: 'cta',
      title: 'Przycisk pod listą',
      fieldset: 'mentoring',
      hidden: ({document}) => !document.have_page,
    },
    // tests
    {
      name: 'tests',
      type: 'array',
      title: 'Lista zabiegów',
      fieldset: 'tests',
      hidden: ({document}) => !document.have_page,
      of: [
        {
          type: 'treatment',
          title: 'Zabieg',
          validation: (rule) =>
            rule.custom((currentValue, {document}) => {
              if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
              return true
            }),
        },
      ],
    },
    // advantages
    {
      name: 'advantages_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'advantages',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'advantages_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'advantages',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'advantages_list',
      type: 'array',
      title: 'Lista wyróżników',
      fieldset: 'advantages',
      hidden: ({document}) => !document.have_page,
      of: [
        {
          type: 'advantages',
          name: 'advantages',
          title: 'Element listy',
        },
      ],
    },
    // specialists
    {
      name: 'specialists_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'specialists',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'specialists_list',
      type: 'array',
      title: 'Lista specjalistów',
      fieldset: 'specialists',
      hidden: ({document}) => !document.have_page,
      of: [
        {
          type: 'services_specialist',
          title: 'Specjalisty',
        },
      ],
    },
    // price
    {
      name: 'price_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'price',
      hidden: ({document}) => !document.have_page,
      fieldset: 'price',
    },
    {
      name: 'price',
      type: 'array',
      title: 'Cennik',
      hidden: ({document}) => !document.have_page,
      fieldset: 'price',
      of: [
        {
          type: 'markdown',
          title: 'Cena',
          validation: (rule) =>
            rule.custom((currentValue, {document}) => {
              if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
              return true
            }),
        },
      ],
    },
    // faq
    {
      name: 'faq_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'faq',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'faq_list',
      type: 'array',
      title: 'Lista pytań',
      fieldset: 'faq',
      hidden: ({document}) => !document.have_page,
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
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'faq_Cta',
      type: 'bigCta',
      title: 'Przycisk pod paragrafem',
      fieldset: 'faq',
      hidden: ({document}) => !document.have_page,
    },
    // freebie
    {
      name: 'freebie_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'freebie',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'freebie_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'freebie',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'freebie_image',
      type: 'image',
      title: 'Obrazek',
      fieldset: 'freebie',
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'freebie_mailerlite_id',
      type: 'string',
      title: 'Mailerlite ID grupy',
      fieldset: 'freebie',
      hidden: ({document}) => !document.have_page,
    },
    //seo
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      fieldset: 'seo',
      hidden: ({document}) => !document.have_page,
    },
  ],

  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja powitalna',
      options: {collapsible: true},
    },
    {
      name: 'registration',
      title: 'Rejestracja',
      options: {collapsible: true},
    },
    {
      name: 'blog',
      title: 'Blog',
      options: {collapsible: true},
    },
    {
      name: 'treatments',
      title: 'Zabiegi',
      options: {collapsible: true},
    },
    {
      name: 'tests',
      title: 'Badania',
      options: {collapsible: true},
    },
    {
      name: 'price',
      title: 'Cennik pozostałych usług',
      options: {collapsible: true},
    },
    {
      name: 'mentoring',
      title: 'Opieka koordynowana',
      options: {collapsible: true},
    },
    {
      name: 'advantages',
      title: 'Wyróżniki',
      options: {collapsible: true},
    },
    {
      name: 'specialists',
      title: 'Specjaliści',
      options: {collapsible: true},
    },
    {
      name: 'faq',
      title: 'FAQ',
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
  ],
}
