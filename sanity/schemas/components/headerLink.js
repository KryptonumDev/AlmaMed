export default {
  type: 'object',
  name: 'header_link',
  title: 'Link',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'url',
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
    {
      name: 'sublinks',
      type: 'array',
      title: 'Podlinki',
      of: [{type: 'header_sub_link'}],
    },
  ],
}

export const headerSubLink = {
  type: 'object',
  name: 'header_sub_link',
  title: 'Podlink',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'url',
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
}
