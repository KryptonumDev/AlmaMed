export default {
  type: 'object',
  name: 'instruction_step',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Gruby tekst po lewej',
      validation: (Rule) => Rule.required(),
    },
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
