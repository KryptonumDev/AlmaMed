export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  fields: [
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
    {
      name: 'robotsIndex',
      type: 'boolean',
      title: 'Indexing by SEO robots',
      description:
        'If enabled SEO robots (such as Google) will be able to index the site in search engines.',
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
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value && !value.match(/^\+48 \d{3} \d{3} \d{3}$/)) {
            return 'Incorrect phone number format.'
          }
          return true
        }),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres email',
      description: 'Adres email',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value && !value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            return 'Incorrect email format.'
          }
          return true
        }),
    },
    {
      name: 'adress',
      type: 'string',
      title: 'Adres',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'time',
      type: 'string',
      title: 'Godziny otwarcia',
      validation: (Rule) => Rule.required(),
    },
    // Header
    // {
    //   name: 'header_links',
    //   type: 'array',
    //   title: 'Linki w nagłówku',
    //   of: [
    //     {
    //       type: 'header_link',
    //       name: 'header_link',
    //       title: 'Link',
    //     },
    //   ],
    // },
    // registration
    {
      name: 'registration_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'registration',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'registration_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'registration',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'registration_video',
      type: 'string',
      title: 'Link do video oEmbed',
      fieldset: 'registration',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'registration_steps',
      type: 'array',
      title: 'Kroki rejestracji',
      fieldset: 'registration',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'markdown',
          title: 'Element listy',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    // blog
    {
      name: 'blog_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'blog',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blog_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'blog',
      validation: (Rule) => Rule.required(),
    },
    // newsletter
    {
      name: 'newsletter_left_icon',
      type: 'image',
      title: 'Ikona lewej kolumny',
      fieldset: 'newsletter',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsletter_left_content',
      type: 'markdown',
      title: 'Treść lewej kolumny',
      fieldset: 'newsletter',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsletter_left_cta',
      type: 'cta',
      title: 'CTA lewej kolumny',
      fieldset: 'newsletter',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsletter_right_heading',
      type: 'markdown',
      title: 'Nagłówek prawej kolumny',
      fieldset: 'newsletter',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsletter_right_paragraph',
      type: 'markdown',
      title: 'Paragraf prawej kolumny',
      fieldset: 'newsletter',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsletter_mailerlite_id',
      type: 'string',
      title: 'Mailerlite ID grupy',
      fieldset: 'newsletter',
      validation: (Rule) => Rule.required(),
    },
    // metrics
    {
      name: 'patients',
      type: 'string',
      title: 'Ilość pacjentów',
      fieldset: 'metrics',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'averageRating',
      type: 'string',
      title: 'Średnia ocena',
      fieldset: 'metrics',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'percentTakenCalls',
      type: 'string',
      title: 'Procent odebranych telefonów',
      fieldset: 'metrics',
      validation: (Rule) => Rule.required(),
    },
    // advantages
    {
      name: 'advantages_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'advantages',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'advantages_paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'advantages',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'advantages_list',
      type: 'array',
      title: 'Lista wyróżników',
      fieldset: 'advantages',
      of: [
        {
          type: 'advantages',
          name: 'advantages',
          title: 'Element listy',
        },
      ],
    },
  ],
  fieldsets: [
    {
      name: 'social',
      title: 'Social links',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'registration',
      title: 'Registration',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'blog',
      title: 'Blog',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'metrics',
      title: 'Metrics',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'advantages',
      title: 'Wyróżniki',
      options: {collapsible: true},
    },
  ],
}

export const global_Seo = {
  name: 'global_Seo',
  title: 'Global SEO',
  type: 'object',
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description:
        'An image that is visible when sharing the page on social media. The dimensions of the photo should be 1200x630px',
    },
  ],
}
