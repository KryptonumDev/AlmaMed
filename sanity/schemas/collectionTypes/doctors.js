export default {
  name: 'doctors',
  title: 'Specjaliści',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'markdown',
      name: 'name',
      title: 'Imię i nazwisko',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'image',
      name: 'image',
      title: 'Zdjęcie specjalisty',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'comments',
      title: 'Opinie pacjentów',
      of: [{ type: 'reference', to: [{ type: 'comments' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
