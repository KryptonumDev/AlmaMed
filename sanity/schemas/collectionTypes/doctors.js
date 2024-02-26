export default {
  name: 'doctors',
  title: 'Specjaliści',
  type: 'document',
  icon: () => `👨‍⚕️`,
  fields: [
    {
      type: 'number',
      name: 'order',
      title: 'Index kolejności',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'markdown',
      name: 'name',
      title: 'Imię i nazwisko',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      title: 'Slug',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'profession',
      title: 'Specjalizacja',
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
      name: 'education',
      title: 'Wykształcenie',
      of: [{type: 'icon_list_element'}],
    },
    {
      type: 'array',
      name: 'flex',
      title: 'Opis',
      of: [{type: 'flex'}],
    },
    {
      type: 'array',
      name: 'comments',
      title: 'Opinie pacjentów',
      of: [{type: 'reference', to: [{type: 'comments'}]}],
      validation: (Rule) => Rule.max(5),
    },
    {
      type: 'array',
      name: 'similar',
      title: 'Podobni specjaliści',
      of: [{type: 'reference', to: [{type: 'doctors'}]}],
      validation: (Rule) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
