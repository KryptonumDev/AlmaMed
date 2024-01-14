export default {
  type: 'object',
  name: 'mentoring_list_element',
  title: 'Element listy',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'oversized',
      type: 'boolean',
      title: 'Czy elemnty mają być powiększone?',
    }
  ],
}
