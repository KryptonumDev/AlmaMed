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
      name: 'locations',
      type: 'array',
      title: 'Lokalizacje',
      description: 'Dla jednej marki/strony możesz podać wiele lokalizacji (np. Bielsk Podlaski i Boćki).',
      of: [{type: 'networkLocation'}],
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
      locations: 'locations',
      media: 'logo',
    },
    prepare({title, locations, media}) {
      const cities = (locations || [])
        .map((location) => location?.city)
        .filter(Boolean)
      const uniqueCities = Array.from(new Set(cities))

      return {
        title,
        subtitle: uniqueCities.join(', '),
        media,
      }
    },
  },
}
