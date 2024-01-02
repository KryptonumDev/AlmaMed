export default {
  type: 'object',
  name: 'faq_list_element',
  title: 'FAQ',
  fields: [
    {
      name: 'question',
      type: 'markdown',
      title: 'Pytanie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      type: 'markdown',
      title: 'Odpowiedź',
      validation: (Rule) => Rule.required(),
    },
  ],
}
