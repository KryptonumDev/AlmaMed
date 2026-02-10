export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => `🌍`,
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
      type: 'file',
      title: 'Video',
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
    {
      name: 'networkClinics',
      type: 'array',
      title: 'Nasze placówki (sieć)',
      description: 'Lista placówek pokazywana w top barze i stopce.',
      fieldset: 'network',
      of: [{type: 'networkClinic'}],
      validation: (Rule) => Rule.max(6),
    },
  ],
  fieldsets: [
    {
      name: 'registration',
      title: 'Rejestracja',
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
      title: 'Metryki',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'advantages',
      title: 'Wyróżniki',
      options: {collapsible: true},
    },
    {
      name: 'network',
      title: 'Sieć placówek',
      options: {collapsible: true},
    },
  ],
}

export const global_Seo = {
  name: 'global_Seo',
  title: 'Globalne ustawienia SEO',
  type: 'object',
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description:
        'Obraz wyświetlający się na w social media. Wymiary obrazku - 1200x630px',
    },
  ],
}
