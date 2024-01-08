export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
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
    // Formularz..?
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
