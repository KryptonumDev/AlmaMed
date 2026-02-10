export default {
  name: 'networkClinic',
  title: 'Placówka w sieci',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa placówki',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortName',
      type: 'string',
      title: 'Krótka nazwa',
      description: 'Używana w zwężonych widokach, np. "Alma-Med".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'city',
      type: 'string',
      title: 'Miasto',
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
    {
      name: 'logo',
      type: 'image',
      title: 'Logo placówki',
      description: 'Opcjonalnie - najlepiej SVG lub PNG na transparentnym tle.',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Adres strony',
      description: 'Pełny URL (https://...) lub "/" dla aktualnej strony.',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true
          if (value === '/') return true
          if (value.startsWith('https://') || value.startsWith('http://')) return true
          return 'Podaj adres zaczynający się od https://, http:// lub "/"'
        }),
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Aktywna',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      media: 'logo',
    },
  },
}
