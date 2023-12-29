export default {
  name: 'bigCta',
  title: 'Call to action',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'text',
      title: 'Text',
      description: 'The text that will appear on the button',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link',
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
        }).required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
      theme: 'theme',
      href: 'href',
    },
    prepare({title, theme, href}) {
      return {
        title: title,
        subtitle: `${theme} button linked to ${href}`,
      }
    },
  },
}
