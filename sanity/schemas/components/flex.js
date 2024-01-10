export default {
  type: 'object',
  name: 'flex',
  title: 'Flex',
  fields: [
    {
      name: 'content',
      type: 'markdown',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Obrazek',
      validation: (Rule) => Rule.required(),
    },
  ],
}
