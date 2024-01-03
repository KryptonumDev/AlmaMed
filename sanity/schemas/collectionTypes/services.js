export default {
  name: 'services',
  title: 'Usługi',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Nazwa usługi',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'icon',
      type: 'image',
      title: 'Ikona usłgugi',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color usługi',
      options: {
        list: [
          {title: 'Zielony', value: 'green'},
          {title: 'Niebieski', value: 'blue'},
          {title: 'Żółty', value: 'yellow'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'green',
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
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
      ],
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'hero_background',
      type: 'image',
      title: 'Obrazek w tle',
      fieldset: 'hero',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
    },
    // treatments
    {
      name: 'treatments_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'treatments',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'treatments_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'treatments',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'treatments_list',
      type: 'array',
      title: 'Lista zabiegów',
      fieldset: 'treatments',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
      of: [
        {
          type: 'treatment',
          title: 'Zabieg',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    // flex
    {
      name: 'flex_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'flex',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
    },
    {
      name: 'flex_list',
      type: 'array',
      title: 'Lista ikon z tekstem',
      fieldset: 'flex',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document.have_page,
      of: [
        {
          type: 'icon_list_element',
          title: 'Element listy',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'flex_Cta',
      type: 'array',
      title: 'Przyciski pod listą',
      fieldset: 'flex',
      hidden: ({document}) => !document.have_page,
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
      name: 'flex_image',
      type: 'image',
      title: 'Obrazek',
      fieldset: 'flex',
      validation: (Rule) => Rule.required(),
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
      name: 'flex',
      title: 'Sekcja dwukolumnowa z obrazkiem',
      options: {collapsible: true},
    },
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true},
    },
  ],
}
