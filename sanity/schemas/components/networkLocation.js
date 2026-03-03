export default {
  name: 'networkLocation',
  title: 'Lokalizacja',
  type: 'object',
  fields: [
    {
      name: 'city',
      type: 'string',
      title: 'Miasto / miejscowość',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adres',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
  ],
  preview: {
    select: {
      title: 'city',
      subtitle: 'address',
    },
  },
}

