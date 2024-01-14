export default {
  type: 'object',
  name: 'services_specialist',
  title: 'Specjalista',
  fields: [
    {
      name: 'title',
      type: 'reference',
      title: 'Specjalista',
      to: [{type: 'doctors'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Opis specjalisty',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link_to_specialist',
      type: 'boolean',
      title: 'Czy linkować do specjalisty?',
    },
  ],
}
