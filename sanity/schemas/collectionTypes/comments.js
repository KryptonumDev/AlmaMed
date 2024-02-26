export default {
  name: 'comments',
  title: 'Kommentarze',
  type: 'document',
  icon: () => `💬`,
  fields: [
    {
      type: 'markdown',
      name: 'name',
      title: 'Imię i nazwisko',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'markdown',
      name: 'text',
      title: 'Opinia',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'number',
      name: 'rating',
      title: 'Ocena',
      validation: (Rule) => Rule.required().min(1).max(5),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
 