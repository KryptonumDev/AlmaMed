export default {
  type: 'object',
  name: 'services_types',
  title: 'Typy usług',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Rodzaj usług',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf pod nazwą rodzaju',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      title: 'Lista usług',
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
  ],
}
