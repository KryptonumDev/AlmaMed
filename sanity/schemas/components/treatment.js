export default {
  type: 'object',
  name: 'treatment',
  title: 'Zabieg',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Nazwa zabiegu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Opis zabiegu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'benefits',
      type: 'array',
      title: 'Efekty zabiegu',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'markdown',
          title: 'Efekt',
          validation: (Rule) => Rule.required(), 
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Obraz zabiegu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sub_title',
      type: 'markdown',
      title: 'Tytuł listy pod zdjęciem',
    },
    {
      name: 'list',
      type: 'array',
      title: 'Lista pod zdjęciem',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'markdown',
          title: 'Element listy',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'price',
      type: 'array',
      title: 'Cennik',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'markdown',
          title: 'Cena',
          validation: (Rule) => Rule.required(),
        },
      ],
    }
  ],
}
