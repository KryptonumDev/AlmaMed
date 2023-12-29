export default {
  type: 'object',
  name: 'advantages',
  title: 'Wyróżniki',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'markdown',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    },
  ],
}
