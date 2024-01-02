export default {
  type: 'object',
  name: 'services_types',
  title: 'Typy usług',
  fields: [
    {
      name: 'title',
      type: 'markdown',
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
      validation: (Rule) => Rule.required(),
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
