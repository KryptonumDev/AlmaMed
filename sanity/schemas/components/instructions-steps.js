export default {
  type: 'object',
  name: 'instruction_step',
  fields: [
    {
      name: 'text',
      type: 'markdown',
      title: 'Treść kroku',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Obrazek kroku',
    },
  ],
}
