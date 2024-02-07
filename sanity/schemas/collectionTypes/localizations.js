const shouldShow = (document) => {
  return document.have_page === true
}

export default {
  name: 'localizations',
  title: 'Placówki',
  type: 'document',
  fields: [
    {
      type: 'markdown',
      name: 'name',
      title: 'Nazwa placówki',
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
      type: 'string',
      name: 'map',
      title: 'Link do google map',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'address',
      title: 'Adres',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'book',
      type: 'string',
      title: 'Link do umówienia wizyty',
      description: 'Relative or absolute link (https://)',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (
            value &&
            !value.startsWith('/') &&
            !value.startsWith('https://') &&
            !value.startsWith('#')
          ) {
            return 'Incorrect URL.'
          }
          return true
        }),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Numer telefonu',
      description: 'Numer telefonu w formacie +48 123 456 789',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres email',
      description: 'Adres email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'time',
      type: 'string',
      title: 'Godziny otwarcia',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'have_page',
      type: 'boolean',
      title: 'Czy ma podstronę?',
      initialValue: false,
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
              if (shouldShow(document) && currentValue === undefined)
                return 'To pole jest wymagane'
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
    // one image section
    {
      name: 'one_image_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'one_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'one_image_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'one_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'one_image_image',
      type: 'image',
      title: 'Obrazek',
      fieldset: 'one_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    // two image section
    {
      name: 'two_image_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'two_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'two_image_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'two_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'two_image_first_image',
      type: 'image',
      title: 'Obrazek',
      fieldset: 'two_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'two_image_second_image',
      type: 'image',
      title: 'Obrazek',
      fieldset: 'two_image',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    // localizations
    {
      name: 'localizations_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'localizations',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'localizations',
      type: 'array',
      title: 'Placówki',
      fieldset: 'localizations',
      of: [
        {
          type: 'reference',
          title: 'Placówka',
          to: [{type: 'localizations'}],
        },
      ],
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'localizations_Cta_text',
      type: 'markdown',
      title: 'Tekst obok przycisku',
      fieldset: 'localizations',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'localizations_Cta_link',
      type: 'bigCta',
      title: 'CTA',
      fieldset: 'localizations',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    // mentoring
    {
      name: 'mentoring_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'mentoring',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
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
      name: 'mentoring_list',
      type: 'array',
      title: 'Etapy opieky koordynowanej',
      fieldset: 'mentoring',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
      of: [
        {
          name: 'mentoring_list_element',
          type: 'mentoring_list_element',
          title: 'Element listy',
          validation: (rule) =>
            rule.custom((currentValue, {document}) => {
              if (shouldShow(document) && currentValue === undefined)
                return 'To pole jest wymagane'
              return true
            }),
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
    // prevention
    {
      name: 'prevention_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'prevention',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'prevention_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'prevention',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'prevention_cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'prevention',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'prevention_metrics_title',
      type: 'string',
      title: 'Tytuł wykresu',
      fieldset: 'prevention',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined) return 'To pole jest wymagane'
          return true
        }),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'prevention_metrics_number',
      type: 'number',
      title: 'Wartość wykresu',
      fieldset: 'prevention',
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(100),
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
  preview: {
    select: {
      title: 'name',
    },
  },
  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja powitalna',
      options: {collapsible: true},
    },
    {
      name: 'one_image',
      title: 'Sekcja z jednym obrazkiem',
      options: {collapsible: true},
    },
    {
      name: 'two_image',
      title: 'Sekcja z dwoma obrazkami',
      options: {collapsible: true},
    },
    {
      name: 'localizations',
      title: 'Placówki',
      options: {collapsible: true},
    },
    {
      name: 'mentoring',
      title: 'Opieka koordynowana',
      options: {collapsible: true},
    },
    {
      name: 'prevention',
      title: 'Profilaktyka',
      options: {collapsible: true},
    },
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true},
    },
  ],
}
