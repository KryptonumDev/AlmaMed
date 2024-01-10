export default {
  type: 'object',
  name: 'instruction_list_element',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Pytanie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Kroki',
      of: [
        {
          type: 'instruction_step',
          title: 'Krok',
        },
      ],
    },
  ],
}
