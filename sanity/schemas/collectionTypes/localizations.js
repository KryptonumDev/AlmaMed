export default {
  name: 'localizations',
  title: 'Placówki',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'markdown',
      name: 'name',
      title: 'Nazwa placówki',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'map',
      title: 'Link do google map',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'address',
      title: 'Adres',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'phone',
      title: 'Telefon',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'email',
      name: 'email',
      title: 'Email',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
